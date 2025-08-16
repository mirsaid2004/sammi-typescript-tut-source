export interface ISPCommand {
    execute(): void;
    undo(): void;
}