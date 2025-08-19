import { ICommand } from "@/core/command";
import { Context } from "@/core/context";

export class StatsCommand implements ICommand {
    constructor(private context: Context) {}

    async execute(): Promise<void> {
        const data = this.context.storage.load();

        if (data.length === 0) {
            console.log("No memorization progress entries found.");
            return;
        }

        const summary = new Map<string, number>();

        for (const entry of data) {
            const key = `${entry.surah}`;
            const count = entry.toAyah - entry.fromAyah + 1;
            if (summary.has(key)) {
                summary.set(key, summary.get(key)! + count);
            } else {
                summary.set(key, count);
            }
        }
        console.log("Memorization Progress Summary:");
        for (const [key, count] of summary) {
            console.log(`- ${key}: ${count}`);
        }
    }
}