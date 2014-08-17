function Game (gameCtrl, gameParameters) {
    this.controller = gameCtrl;
    this.parameters = gameParameters;
    this.pointerHand = true;

    if (this.parameters.help) {
        this.help = 3;
    } else {
        this.help = 0;
        this.view.disableHelp();
    }

    this.nbBombs = this.parameters.nbBombs;
    this.remainingBombs = this.nbBombs;

    this.nbClikedBoxes = 0;
    this.nbBoxes = this.parameters.width * this.parameters.height;
};

Game.prototype.getNbBoxes = function () {
    return this.nbBoxes;
};

Game.prototype.getNbBombs = function () {
    return this.nbBombs;
};

Game.prototype.getNbClickedBoxes = function () {
    return this.nbClikedBoxes;
}

Game.prototype.removeRemainingBomb =  function () {
    this.remainingBombs--;
};

Game.prototype.addRemainingBomb =  function () {
    this.remainingBombs++;
};

Game.prototype.addclickedBox = function () {
    this.nbClikedBoxes++;
};

Game.prototype.getRemainingBombs = function () {
    return this.remainingBombs;
}

Game.prototype.switchPointer = function () {
    this.pointerHand = !this.pointerHand;
};

Game.prototype.isPointerHand = function () {
    return this.pointerHand === true;
};

Game.prototype.getRemainingHelp = function () {
    return this.help;
};

Game.prototype.decreaseHelp = function () {
    this.help--;
};
