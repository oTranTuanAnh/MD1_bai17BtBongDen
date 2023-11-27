class ElectricLamp {
    constructor(status) {
        this.status = status;
    }
    turnOn(){
        this.status = true;
    }
    turnOff(){
        this.status = false;
    }
}

class SwitchButton {
    constructor(status, lamp) {
        this.status = status;
        this.lamp = lamp;
    }
    connectToLamp(lamp){
        return this.lamp = lamp;
    }
    switchOff(){
        this.lamp.status = false;
        return this.status = false;
    }
    switchOn(){
        this.lamp.status = true;
        return this.status = true;
    }

}

let myLamp = new ElectricLamp(false);
let myButton = new SwitchButton(false, myLamp);

console.log(myButton.switchOn());
console.log(myButton.switchOff());
