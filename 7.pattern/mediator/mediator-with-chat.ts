interface ChatMediator {
    sendMessage(message: string, user: MediatorUser): void;
    addUser(user: MediatorUser): void;
}

class MediatorUser {
    private name: string;
    private mediator: ChatMediator;

    constructor(name: string, mediator: ChatMediator) {
        this.name = name;
        this.mediator = mediator;
    }

    sendMessage(message: string): void {
        console.log(`${this.name} sends: ${message}`);
        this.mediator.sendMessage(message, this);
    }

    receiveMessage(message: string, from: string): void {
        console.log(`${this.name} receives: ${message} from ${from}`);
    }

    getName(): string {
        return this.name;
    }
}

class ChatRoom implements ChatMediator {
    private users: MediatorUser[] = [];

    addUser(user: MediatorUser): void {
        this.users.push(user);
    }

    sendMessage(message: string, sender: MediatorUser): void {
       for(const user of this.users) {
         if(user !== sender) {
            user.receiveMessage(message, user.getName());
         }
       }
    }
}


const chatRoom = new ChatRoom();

const user1 = new MediatorUser("Alice", chatRoom);
const user2 = new MediatorUser("Bob", chatRoom);
const user3 = new MediatorUser("Charlie", chatRoom);

chatRoom.addUser(user1);
chatRoom.addUser(user2);
chatRoom.addUser(user3);

user1.sendMessage("Hello everyone!");