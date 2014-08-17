var GameCtrl = function (minesweeper, gameParameters) {
	this.minesweeper = minesweeper;
	this.gameParameters = gameParameters;
    this.init();
};

GameCtrl.prototype.init = function () {
    this.board = new BoardCtrl(this, this.gameParameters.width, this.gameParameters.height, this.gameParameters.nbBombs);
    this.model = new Game(this, this.gameParameters);
    this.view = new GameView(this);
    this.view.updateRemainingBombs(this.model.getRemainingBombs());

    this.timer = new Timer(document.getElementById("remainingTime"));
};

GameCtrl.prototype.isPointerHand = function () {
    return this.model.isPointerHand();
};

GameCtrl.prototype.switchPointer = function () {
	this.model.switchPointer();
    this.view.updatePointer(this.model.isPointerHand());
};

GameCtrl.prototype.backHome = function () {
    this.minesweeper.gameBackHome();
	this.timer.pause();
};

GameCtrl.prototype.restartGame = function () {
    this.timer.restart();
    this.init();
};

GameCtrl.prototype.continueGame = function () {
    console.log("continue game");
    this.timer.restart();
};

GameCtrl.prototype.showSolution = function () {
    this.timer.pause();
    this.board.showAllBoxes(this.board.boxes);
};

GameCtrl.prototype.addclickedBox = function () {
	this.model.addclickedBox();
};

GameCtrl.prototype.removeRemainingBomb = function () {
	this.model.removeRemainingBomb();
	this.view.updateRemainingBombs(this.model.getRemainingBombs());
};

GameCtrl.prototype.addRemainingBomb = function () {
	this.model.addRemainingBomb();
	this.view.updateRemainingBombs(this.model.getRemainingBombs());
};

GameCtrl.prototype.checkEndGame = function () {
    if (this.model.getRemainingBombs() == 0
        && (this.model.getNbClickedBoxes() + this.model.getNbBombs() == this.model.getNbBoxes())) {

        if(this.board.boardValidation()) {
            this.minesweeper.winGame(this.timer.getTime());
        } else {
            this.minesweeper.looseGame();
        }

        this.minesweeper.hideBackCurrentGameButton();
    }
};

GameCtrl.prototype.looseGame = function () {
    this.showSolution();
    this.minesweeper.looseGame();
};

GameCtrl.prototype.toogleGame = function () {
    this.timer.toogleTimer();
    this.view.updateGameStatus(!this.timer.status);
};

GameCtrl.prototype.isHelpActive = function () {
    if (this.model.getRemainingHelp() > 0 && this.model.getNbBoxes() / 2 > this.model.getNbClickedBoxes()) {
        return true;
    }
    this.model.help = 0;
    this.view.disableHelp();
    return false;
};

GameCtrl.prototype.clickRandomHelp = function () {
    if (this.isHelpActive()) {
        this.model.decreaseHelp();
        this.view.updateHelpStatus(this.model.getRemainingHelp());
        this.board.clickRandom();
    };
};

