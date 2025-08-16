import { AddTextCommand } from "./command/add-text.command";
import { TextEditor } from "./text-editor";

const editor = new TextEditor();

const undoStack: AddTextCommand[] = [];
const redoStack: AddTextCommand[] = [];

function runCommand(command: AddTextCommand): void {
    command.execute();
    undoStack.push(command);
    redoStack.length = 0; // Clear redo stack after a new command
}

function undo(): void {
    const command = undoStack.pop();
    if(command) {
        command.undo();
        redoStack.push(command);
    }
}

function redo(): void {
    const command = redoStack.pop();
    if(command) {
        command.execute();
        undoStack.push(command);
    }
}

runCommand(new AddTextCommand(editor, "Hello, World!"));
runCommand(new AddTextCommand(editor, " Hello, Universe!"));
console.log(editor.getContent()); // Hello, World! Hello, Universe!

undo();
console.log(editor.getContent()); // Hello, World!

redo();
console.log(editor.getContent()); // Hello, World! Hello, Universe!