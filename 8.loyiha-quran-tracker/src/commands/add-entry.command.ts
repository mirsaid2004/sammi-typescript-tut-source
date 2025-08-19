import { CREATE_ENQUERY } from "@/constants/create-inquirer";
import { ICommand } from "@/core/command";
import { Context } from "@/core/context";
import { MemorizationProgress } from "@/types/types";
import inquirer from "inquirer";

export class AddEntryCommand implements ICommand {
    constructor(private context: Context) {}

    async execute() {
        const answers = await inquirer.prompt(CREATE_ENQUERY)

        const newEntry: MemorizationProgress = {
            surah: answers.surah,
            fromAyah: parseInt(answers.fromAyah, 10),
            toAyah: parseInt(answers.toAyah, 10),
            date: new Date().toISOString()
        }

        const data = this.context.storage.load();
        data.push(newEntry);
        this.context.storage.save(data);
        console.log("New entry added successfully!");
    }
}