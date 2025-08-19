import { ICommand } from "@/core/command";
import { Context } from "@/core/context";

export class ExitCommand implements ICommand {
    // @ts-ignore
    constructor(private context: Context) {}

    async execute() {
        console.log("Exiting...");
        // this.context.storage.save(this.context.storage.load());
        process.exit(0);
    }
}