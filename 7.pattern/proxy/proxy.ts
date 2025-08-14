export interface DocumentService {
    readDocument(): void;
}

class RealDocument implements DocumentService {
    readDocument(): void {
        console.log("Reading document...");
    }
}

class DocumentProxy implements DocumentService {
    private realDocument: RealDocument;

    constructor(private userRole: string) {
        this.realDocument = new RealDocument();
    }

    readDocument(): void {
        if(this.userRole === "admin") {
            this.realDocument.readDocument();
        } else {
            console.log("Access denied.");
        }
    }
}

const admin = new DocumentProxy("admin");
admin.readDocument();

const user = new DocumentProxy("user");
user.readDocument();