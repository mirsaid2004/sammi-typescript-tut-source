import { CREATE_ENQUERY } from "@/constants/create-inquirer";
import { ICommand } from "@/core/command";
import { Context } from "@/core/context";
import { MemorizationProgress } from "@/types/types";
import inquirer from "inquirer";

export class EditEntryCommand implements ICommand {
    constructor(private context: Context) {}

    async execute(): Promise<void> {
        const data = this.context.storage.load();

        if (data.length === 0) {
            console.log("No memorization progress entries found.");
            return;
        }

       const inquirerPrompt = inquirer.prompt([
            {
                type: "list",
                name: 'index',
                message: "Select an entry to edit:",
                choices: data.map((entry, index) => ({
                    name: `${entry.surah} (from Ayah ${entry.fromAyah} to Ayah ${entry.toAyah})`,
                    value: index
                }))
            }
        ])

        const selectedEntry = data[(await inquirerPrompt).index];

        const updatedPrompt = await inquirer.prompt(CREATE_ENQUERY)

        const updatedEntry: MemorizationProgress = {
                    surah: updatedPrompt.surah,
                    fromAyah: parseInt(updatedPrompt.fromAyah, 10),
                    toAyah: parseInt(updatedPrompt.toAyah, 10),
                    date: new Date().toISOString()
                }

        data[(await inquirerPrompt).index] = {
            ...selectedEntry,
            ...updatedEntry
        }

        this.context.storage.save(data);
        console.log("Entry updated successfully.");
    }
}