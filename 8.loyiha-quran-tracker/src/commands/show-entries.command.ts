import { ICommand } from "@/core/command";
import { Context } from "@/core/context";

export class ShowEntriesCommand implements ICommand {
    constructor(private context: Context) {}

    async execute() {
        const data = this.context.storage.load();

        if (data.length === 0) {
            console.log("No memorization progress entries found.");
            return;
        }
        
        console.log("Memorization Progress Entries:");
        data.forEach(entry => {
            console.log(`Surah: ${entry.surah}, From Ayah: ${entry.fromAyah}, To Ayah: ${entry.toAyah}, Date: ${entry.date}`);
        });
    }
}