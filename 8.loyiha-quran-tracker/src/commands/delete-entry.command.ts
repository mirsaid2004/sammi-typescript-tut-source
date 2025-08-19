import { ICommand } from "@/core/command";
import { Context } from "@/core/context";
import inquirer from "inquirer";

export class DeleteEntryCommand implements ICommand {
    constructor(private context: Context) {}

    async execute() {
        const data = this.context.storage.load();

        if (data.length === 0) {
            console.log("No entries found.");
            return;
        }

        // Proceed with deletion logic
        const inquirerPrompt = inquirer.prompt([
            {
                type: "list",
                name: 'index',
                message: "Select an entry to delete:",
                choices: data.map((entry, index) => ({
                    name: `${entry.surah} (from Ayah ${entry.fromAyah} to Ayah ${entry.toAyah})`,
                    value: index
                }))
            }
        ])

        data.splice((await inquirerPrompt).index, 1);
        this.context.storage.save(data);
        console.log("Entry deleted.");
    }
}