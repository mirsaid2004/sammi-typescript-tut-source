import { ISPCommand } from "../interfaces/command";
import { TextEditor } from "../text-editor";

export class AddTextCommand implements ISPCommand {
    private lastText: string = '';

    constructor(private editor: TextEditor, private text: string) {}

    execute(): void {
        this.lastText = this.editor.getContent();
        this.editor.write(this.text);
    }

    undo(): void {
        this.editor.delete(this.lastText.length);
    }
}