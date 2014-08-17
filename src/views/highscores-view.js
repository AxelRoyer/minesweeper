var HighscoresView = function (controller) {
	this.controller = controller;

    document.getElementById("highscoresBackButton").addEventListener("click", function () {
        this.controller.mainCtrl.view.showHomePage("highscores");
    }.bind(this));
};

HighscoresView.prototype.populateHighscores = function (highscores) {
    utils.deleteChildrens("highscoresContainer");
    var container = document.getElementById("highscoresContainer");

    if (highscores.length > 0) {
        highscores.forEach(function (item) {
            var line = document.createElement("tr");

            var cell_name = document.createElement("td");
            cell_name.textContent =item.player;
            line.appendChild(cell_name);

            var cell_level = document.createElement("td");
            cell_level.textContent =item.level;
            line.appendChild(cell_level);

            var cell_time = document.createElement("td");
            cell_time.textContent =item.time;
            line.appendChild(cell_time);

            container.appendChild(line);
        });
    }
};
