var MinesweeperView = function (controller) {
    this.height = document.body.clientHeight;
    this.width = document.body.clientWidth;

    this.wrapper = document.getElementById("wrapper");
    this.wrapper.style.width = this.width * 2 + "px";
	this.controller = controller;

    this.newGameButton = document.getElementById("newGameButton");
    this.rulesButton = document.getElementById("rulesButton");
    this.parametersButton = document.getElementById("parametersButton");
    this.highscoresButton = document.getElementById("highscoresButton");
    this.backCurrentGameButton = document.getElementById("backCurrentGameButton");

    this.initUI();

    document.getElementById("newGameButton").addEventListener("click", function () {
    	this.controller.clickGameButton();
    }.bind(this));

    document.getElementById("backCurrentGameButton").addEventListener("click", function () {
        this.controller.clickRestartGameButton();
    }.bind(this));

    document.getElementById("highscoresButton").addEventListener("click", function () {
    	this.controller.clickHighscoresButton();
    }.bind(this));

    document.getElementById("parametersButton").addEventListener("click", function () {
        this.controller.clickParametersButton();
    }.bind(this));

    document.getElementById("rulesButton").addEventListener("click", function () {
        this.controller.clickRulesButton();
    }.bind(this));

    document.getElementById("rulesBackButton").addEventListener("click", function () {
        this.showHomePage("rules");
    }.bind(this));
};

MinesweeperView.prototype.initUI = function () {
};

MinesweeperView.prototype.showPage = function () {
};

MinesweeperView.prototype.showHomePage = function () {
};

MinesweeperView.prototype.showBackCurrentGameButton = function () {
};

MinesweeperView.prototype.hideBackCurrentGameButton = function () {
};
