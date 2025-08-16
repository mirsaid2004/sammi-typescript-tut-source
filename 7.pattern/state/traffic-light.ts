// ------------ Without state pattern case ----------------

type TrafficLightStateType = "red" | "yellow" | "green";

class TrafficLight {
    private state: TrafficLightStateType = "red";

    change() {
        if(this.state === "red") {
            this.state = "green";
            console.log("Green light");
        } else if(this.state === "green") {
            this.state = "yellow";
            console.log("Yellow light");
        } else {
            this.state = "red";
            console.log("Red light");
        }
    }
}

// const trafficLight = new TrafficLight();
// trafficLight.change(); // Green light
// trafficLight.change(); // Yellow light
// trafficLight.change(); // Red light 
// trafficLight.change(); // Green light again


// ----------- With state pattern ---------------

interface ITrafficLightState {
    change(): void;
}

class TrafficLightState {
    private state!: ITrafficLightState;

    setState(state: ITrafficLightState) {
        this.state = state;
    }

    change() {
        this.state.change();
    }
}

class RedLightState implements ITrafficLightState {
    constructor(private trafficLight: TrafficLightState) {}

    change() {
        console.log("Green go");
        this.trafficLight.setState(new GreenLightState(this.trafficLight));
    }
}

class GreenLightState implements ITrafficLightState {
    constructor(private trafficLight: TrafficLightState) {}

    change() {
        console.log("Yellow light");
        this.trafficLight.setState(new YellowLightState(this.trafficLight));
    }
}

class YellowLightState implements ITrafficLightState {
    constructor(private trafficLight: TrafficLightState) {}

    change() {
        console.log("Red light");
        this.trafficLight.setState(new RedLightState(this.trafficLight));
    }
}

const trafficLightState = new TrafficLightState();
trafficLightState.setState(new RedLightState(trafficLightState));
trafficLightState.change()
trafficLightState.change()
trafficLightState.change()
trafficLightState.change()