class UserChat {
    private users: UserChat[] = [];

    name: string; // Explicitly declare the property

    constructor(name: string) {
        this.name = name; // Assign the parameter to the property
    }

    setUsers(users: UserChat[]) {
        this.users = users;
    }

    sendMessage(message: string) {
        console.log(`${this.name} sends: ${message}`);
        for (const user of this.users) {
            if (user !== this) {
                user.receiveMessage(message, this.name);
            }
        }
    }

    receiveMessage(message: string, from: string) {
        console.log(`${this.name} receives: ${message} from ${from}`);
    }

    getName() {
        return this.name;
    }
}

const ali = new UserChat('Ali');
const osman = new UserChat('Osman');
const omar = new UserChat('Omar');

const allUsers = [ali, osman, omar];

ali.setUsers(allUsers);
osman.setUsers(allUsers);
omar.setUsers(allUsers);

ali.sendMessage('Hello everyone!');
osman.sendMessage('Hi Ali!');
omar.sendMessage('Hey there!');