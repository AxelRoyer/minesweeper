var MinesweeperCtrl = function () {
    this.model = new Minesweeper(this);
    this.view = new MinesweeperView(this);

    this.gameCtrl = null;
    this.highscoresCtrl = new HighscoresCtrl(this);
    this.parametersCtrl = new ParametersCtrl(this);
    this.parametersCtrl.initLanguage();

    window.location = "#home";
};

MinesweeperCtrl.prototype.clickGameButton = function () {
    this.gameCtrl = new GameCtrl(this, this.parametersCtrl.getParameters());
    this.view.showPage();
};

MinesweeperCtrl.prototype.clickHighscoresButton = function () {
    this.highscoresCtrl.updateHighscores();
    this.view.showPage();
};

MinesweeperCtrl.prototype.clickRulesButton = function () {
    this.view.showPage();
};

MinesweeperCtrl.prototype.clickParametersButton = function () {
    this.parametersCtrl.showPage();
    this.view.showPage();
};

MinesweeperCtrl.prototype.clickRestartGameButton = function () {
    this.gameCtrl.continueGame();
    this.view.showPage();
};

MinesweeperCtrl.prototype.hideBackCurrentGameButton = function () {
    this.view.hideBackCurrentGameButton();
};

MinesweeperCtrl.prototype.winGame = function (time) {
    if (this.highscoresCtrl.isHighscore(time)) {
            dialogBox.prompt("You Win !!!", "Please enter your name: ", "name", function (name) {
                if (name.length === 0) {
                    name = "The unknown";
                }
                this.highscoresCtrl.saveHighScore(name, time, this.parametersCtrl.getParameters());
            }.bind(this));
    } else {
        dialogBox.ChoicesBox("You Win !!!", "try to improve your time to be in highscores :)",
            [{label:"New game", value:"new"}, {label:"Home", value:"home"}, {label:"highscores", value:"highscores"}],
            function (value) {
                if (value === "new") {
                    this.gameCtrl.restartGame();
                } else if (value === "highscores") {
                    this.view.switchPage("game", "highscores");
                } else {
                    this.view.showHomePage("highscores")
                }
        }.bind(this));
    }
};

MinesweeperCtrl.prototype.looseGame = function () {
    dialogBox.ChoicesBox("You loose...", "maybe next time :)",
        [{label:"New game", value:"new"}, {label:"Home", value:"home"}],
        function (value) {
            if (value === "new") {
                this.gameCtrl.restartGame();
            } else {
                this.view.showHomePage("game");
            }
    }.bind(this));
};

MinesweeperCtrl.prototype.gameBackHome = function () {
    this.view.showBackCurrentGameButton();
    this.view.showHomePage();
};

MinesweeperCtrl.prototype.parametersBackHome = function () {
    this.view.parametersBackHome();
    this.view.showHomePage();
};

MinesweeperCtrl.prototype.highscoresBackHome = function () {
    this.view.highscoresBackHome();
    this.view.showHomePage();
};

MinesweeperCtrl.prototype.clearHighscores = function () {
    this.highscoresCtrl.clearHighscores();
};
