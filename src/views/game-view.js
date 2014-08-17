function GameView (gameCtrl) {
    this.controller = gameCtrl;

    var self = this;
    document.getElementById("playPauseTimer").addEventListener("click", function () {
        self.controller.toogleGame();
    });

    document.getElementById("newGame").addEventListener("click", function () {
        self.controller.restartGame();
    });

    document.getElementById("endGame").addEventListener("click", function () {
        self.controller.showSolution();
    });

    document.getElementById("gameBackButton").addEventListener("click", function () {
        self.controller.backHome();
    });

    document.getElementById("helpButton").addEventListener("click", function () {
        self.controller.clickRandomHelp();
    });

    document.getElementById("switchPointer").addEventListener("click", function () {
        self.controller.switchPointer();
    });
};

GameView.prototype.updateRemainingBombs = function (nbBombs) {
    document.getElementById("remainingBombs").textContent = nbBombs;
};

GameView.prototype.updateGameStatus = function (status) {
    if (status) {
        document.getElementById("playPauseTimer").className = "playTimer";
    } else {
        document.getElementById("playPauseTimer").className = "pauseTimer";
    }
};

GameView.prototype.updateHelpStatus = function (nbRemainingHelp) {
    if (nbRemainingHelp !== 3) {
        var icon = document.getElementById("icon" + (nbRemainingHelp + 1));
        icon.className = "help-icon-disable";
    }
};

GameView.prototype.initHelpStatus = function () {
    var helpContainer = document.getElementById("helpButton");
    for (var i = 1 ; i <= 3 ; i++) {
        helpContainer.querySelector("#icon" + i).className = "help-icon-enable";
    }
};

GameView.prototype.disableHelp = function () {
    document.getElementById("helpButton").className = "help-disabled";
};

GameView.prototype.updatePointer = function (pointer) {
    var pointerButton = document.getElementById("switchPointer");
    var board = document.getElementById("board");

    if (pointer) {
        pointerButton.className = "hand-flag";
        board.className = "game-cursor-hand";
    } else {
        pointerButton.className = "flag-hand";
        board.className = "game-cursor-flag";
    }
};
