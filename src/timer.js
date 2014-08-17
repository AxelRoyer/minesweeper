function Timer (container) {
    this.minutes = 0;
    this.secondes = 0;
    this.status = true;
    this.timeContainer = container;
    console.log("constructor", container);
    this.increment();
};

Timer.prototype.increment = function () {
    if (this.secondes === 59){
        this.secondes = 0;
        this.minutes++;
    } else {
        this.secondes++;
    }
    this.updateTimeDom();
    this.timer = setTimeout(this.increment.bind(this),1000);
};

Timer.prototype.toogleTimer = function () {
    this.status = !this.status;

    if (this.status) {
        this.restart();
    } else {
        this.pause();
    }
};

Timer.prototype.restart = function () {
    this.status = true;
    clearTimeout(this.timer);
    this.timer = setTimeout(this.increment.bind(this),1000);
};

Timer.prototype.pause = function () {
    this.status = false;
    clearTimeout(this.timer);
};

Timer.prototype.updateTimeDom = function () {
    var minutes = this.minutes;
    var secondes = this.secondes;

    if (minutes < 10){
        minutes = "0" + minutes;
    };

    if (secondes < 10){
        secondes = "0" + secondes;
    }

    this.timeContainer.textContent = minutes + ":" + secondes;
};

Timer.prototype.getTime = function () {
    return this.minutes * 60 + this.secondes;
};

