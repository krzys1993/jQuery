class ClockService{

    setDefaultTime(){
        this.time = 3;
    }

    decreaseTime(){
        if (this.time > 0) {
            this.time--;
        }
    }

    getSeconds(){
        return this.time;
    }
}