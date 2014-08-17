var Highscores = function (controller) {
	this.controller = controller;
	this.highscores = [];
	this.initHighscores();
};

Highscores.prototype.isHighscore = function (time) {
    if (this.highscores.length < 11) {
        return true;
    }
    if (this.highscores.length > 1 && this.highscores[-1 + this.highscores.length].time > time) {
    	return true;
    }
    return false;
};

Highscores.prototype.initHighscores = function () {
    if (localStorage) {
        var highscores = JSON.parse(localStorage.getItem("highscores"));

        if (highscores && highscores.length !== 0) {
            this.highscores = highscores;
        }
    }
};

Highscores.prototype.getHighscores = function () {
	return this.highscores;
};

Highscores.prototype.saveHighscore = function (playerName, time, parameters) {
    if (this.highscores.length === 0) {
        this.highscores.push({
            time:time,
            player:playerName,
            level:parameters.level
        });
    } else {
    	for (var i = 0, len = this.highscores.length; i <= len; i++) {
            if ( i == len || this.highscores[i].time > time) {
                this.highscores.splice(i, 0, {
                    time:time,
                    player:playerName,
                    level:parameters.level
                });
                break;
            }
        }
    }

    if (localStorage) {
        localStorage.setItem("highscores", JSON.stringify(this.highscores));
    }
}
