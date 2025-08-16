// command pattern - encapsulates a request as an object, thereby allowing for parameterization of clients with queues, requests, and operations

interface ICommand {
    execute(): void;
}

class Light {
    turnOn() {
        console.log("Light is ON");
    }

    turnOff() {
        console.log("Light is OFF");
    }
}

class TurnOnCommand implements ICommand {
    constructor(private light: Light) {}

    execute(): void {
        this.light.turnOn();
    }
}

class TurnOffCommand implements ICommand {
    constructor(private light: Light) {}

    execute(): void {
        this.light.turnOff();
    }
}


class RemoteControl {
    private command!: ICommand;

    setCommand(command: ICommand): void {
        this.command = command;
    }

    pressButton(): void {
        this.command.execute();
    }
}

const light = new Light();
const turnOnCommand = new TurnOnCommand(light);
const turnOffCommand = new TurnOffCommand(light);

const remote = new RemoteControl();
remote.setCommand(turnOnCommand);
remote.pressButton(); // Light is ON
remote.setCommand(turnOffCommand);
remote.pressButton(); // Light is OFF
