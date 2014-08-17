var BoardCtrl = function (controller, width, height, nbBombs) {
	this.controller = controller;
	this.model = new Board({
        controller:this,
        width:width,
        height:height,
        nbBombs: nbBombs
    });

    this.view = new BoardView(this, width, height);
	this.view.updateBoxes(this.model.getBoxes());
};

BoardCtrl.prototype.click = function (idBox) {
    if (!this.controller.isPointerHand()) {
        this.rightClick(idBox);
    } else {
        if (!this.model.isFlaged(idBox)) {
            if (this.model.isBomb(idBox)) {
                this.showAllBoxes();
                this.controller.looseGame();
            }else {
                this.propagation(idBox);
                this.controller.checkEndGame();
            }
        }
    }
};

BoardCtrl.prototype.showAllBoxes = function () {
    for (var i = 0, len = this.model.getBoxes().length; i < len ; i++) {
        this.model.clickBox(i);
        this.view.updateBox(i, this.model.getBox(i));
    }
}

BoardCtrl.prototype.doubleClick = function (idBox) {
    var neighbors = this.model.findNeighbors(idBox);
    var nbFlagedNeighbours = 0;

    for (var i = 0, len =  neighbors.length ; i < len; i++) {
        if (this.model.isFlaged(neighbors[i])) {
            nbFlagedNeighbours++;
        }
    }

    if (this.model.getValue(idBox) === nbFlagedNeighbours) {
        for (var i = 0, len = neighbors.length ; i < len; i++) {
            if (!this.model.isFlaged(neighbors[i])) {
                this.click(neighbors[i]);
            }
        }
    }

    this.controller.checkEndGame();
};

BoardCtrl.prototype.rightClick =  function (idBox) {
    if (!this.model.isClicked(idBox)) {
        if (this.model.isFlaged(idBox)) {
            this.model.unflagBox(idBox);
            this.controller.addRemainingBomb();
        } else {
            this.model.flagBox(idBox);
            this.controller.removeRemainingBomb();
        }
        this.view.updateBox(idBox, this.model.getBox(idBox));
    }
    this.controller.checkEndGame();
};

BoardCtrl.prototype.propagation = function (idBox) {
    if (!this.model.isClicked(idBox) && !this.model.isFlaged(idBox)) {
        this.model.clickBox(idBox);
        this.controller.addclickedBox();
        this.view.updateBox(idBox, this.model.boxes[idBox]);

        if (this.model.isEmpty(idBox)) {
            var neighbors = this.model.findNeighbors(idBox);

            for (var i = 0, len = neighbors.length ; i < len ; i++) {
                this.propagation(neighbors[i]);
            }
        }
    }
};

BoardCtrl.prototype.clickRandom = function () {
    var random;
    do {
        random = Math.floor(Math.random() * this.model.getBoardWidth() * this.model.getBoardHeight());
    }
    while (this.model.isBomb(random) || this.model.isClicked(random));
    this.click(random);
};

BoardCtrl.prototype.boardValidation = function () {
    this.model.getBoxes().forEach(function (box) {
        if (box.isFlaged() && !box.isBomb()) {
            return false;
        }
    });
    return true;
};
