var HighscoresCtrl = function (minesweeper) {
	this.mainCtrl = minesweeper;
	this.view = new HighscoresView(this);
    this.model = new Highscores(this);
}

HighscoresCtrl.prototype.updateHighscores = function () {
	this.view.populateHighscores(this.model.getHighscores());
};

HighscoresCtrl.prototype.saveHighScore = function (playerName, time, parameters) {
    this.model.saveHighscore(playerName, time, parameters);
};

HighscoresCtrl.prototype.isHighscore = function (time) {
    return this.model.isHighscore(time);
};
