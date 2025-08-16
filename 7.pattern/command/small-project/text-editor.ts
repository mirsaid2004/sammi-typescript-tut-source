export class TextEditor {
    private content: string = '';

    write(text: string): void {
        this.content += text;
    }

    delete(length: number) {
        this.content = this.content.slice(0, length);
    }

    getContent(): string {
        return this.content;
    }
}