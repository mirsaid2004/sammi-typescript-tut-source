interface State {
    play(): void;
    pause(): void;
}

class MediaPlayer {
    private state!: State;
    
    setState(state: State): void {
        this.state = state;
    }

    getState(): State {
        return this.state;
    }

    play(): void {
        this.state.play();
    }

    pause(): void {
        this.state.pause();
    }
}

class PlayingState implements State {
    private player: MediaPlayer;

    constructor(player: MediaPlayer) {
        this.player = player;
    }

    play(): void {
        console.log("Playing...");
    }

    pause(): void {
        console.log("Paused.");
        this.player.setState(new PausedState(this.player));
    }
}

class PausedState implements State {
    private player: MediaPlayer;

    constructor(player: MediaPlayer) {
        this.player = player;
    }

    play(): void {
        console.log("Resumed playing...");
        this.player.setState(new PlayingState(this.player));
    }

    pause(): void {
        console.log("Already paused.");
    }
}

const player = new MediaPlayer();
player.setState(new PausedState(player));

player.play(); // Resumed playing...
player.play();