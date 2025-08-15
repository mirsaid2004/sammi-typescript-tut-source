interface Handler {
    next(handler: Handler): Handler;
    handle(request: RequestIssue): void
}

enum RequestLevel {
    LEVEL_1,
    LEVEL_2,
    LEVEL_3
}

enum RequestIssue {
    NETWORK_ISSUE,
    PASSWORD_RESET,
    BILLING_ISSUE
}

abstract class AbstractClass implements Handler {
    private nextHandler: Handler | null = null;

    next(handler: Handler): Handler {
        this.nextHandler = handler;
        return handler;
    }

    handle(request: RequestIssue): void {
        if (this.nextHandler) {
            this.nextHandler.handle(request);
        } else {
            console.log("No handler for request:", request);
        }
    }
}

class Level1Support extends AbstractClass {
    handle(request: RequestIssue) {
        if (request === RequestIssue.BILLING_ISSUE) {
            console.log('Level 1 support handling request:', request);
        } else {
            super.handle(request);
        }
    }
}

class Level2Support extends AbstractClass {
    handle(request: RequestIssue) {
        if (request === RequestIssue.NETWORK_ISSUE) {
            console.log('Level 2 support handling request:', request);
        } else {
            super.handle(request);
        }
    }
}

class Level3Support extends AbstractClass {
    handle(request: RequestIssue): void {
        if (request === RequestIssue.PASSWORD_RESET) {
            console.log('Level 3 support handling request:', request);
        } else {
            super.handle(request);
        }
    }
}

const level1Support = new Level1Support();
const level2Support = new Level2Support();
const level3Support = new Level3Support();

level1Support.next(level2Support).next(level3Support);

level1Support.handle(RequestIssue.BILLING_ISSUE);
level1Support.handle(RequestIssue.NETWORK_ISSUE);
level1Support.handle(RequestIssue.PASSWORD_RESET);
level1Support.handle(RequestIssue.BILLING_ISSUE);