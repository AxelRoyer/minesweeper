function Board (options) {
    this.controller = options.controller;
    this.width = parseInt(options.width);
    this.height = parseInt(options.height);
    this.nbBombs = parseInt(options.nbBombs);
    this.boxes = [];

    this.initBoxes();
    this.populate();
};

Board.prototype.initBoxes = function () {
    for (var i = 0, len = this.width * this.height ; i < len ; i++) {
        this.boxes.push(new Box(i));
    }
};

Board.prototype.getBoardWidth = function () {
    return this.width;
};

Board.prototype.getBoardHeight = function () {
    return this.height;
};

Board.prototype.isFlaged = function (id) {
    return this.boxes[id].flaged;
};

Board.prototype.flagBox = function (id) {
    this.boxes[id].setFlaged(true);
};

Board.prototype.unflagBox = function (id) {
    this.boxes[id].setFlaged(false);
};

Board.prototype.isBomb = function (id) {
    return this.boxes[id].getValue() === "b";
};

Board.prototype.isClicked = function (id) {
    return this.boxes[id].getClickedStatus() === true;
};

Board.prototype.clickBox = function (id) {
    this.boxes[id].setClicked(true);
};

Board.prototype.isEmpty = function (id) {
    return this.boxes[id].getValue() === 0;
};

Board.prototype.findNeighbors = function (idBox) {
    if (this.boxes[idBox].getNeighbors().length !== 0) {
        return this.boxes[idBox].getNeighbors();
    }

    // A B C
    // D i E
    // F G H
    idBox = parseInt(idBox);

    var testB = idBox >= this.width;
    var testD = idBox % this.width > 0;
    var testE = idBox % this.width < (this.width - 1);
    var testG = idBox < (this.width * this.height - this.width);

    // A
    if (testB && testD) {
        var a = idBox - this.width - 1;
        this.boxes[idBox].addNeighbor(a);
    }

    // B
    if (testB) {
        var b = idBox - this.width;
        this.boxes[idBox].addNeighbor(b);
    }

    // C
    if (testB && testE) {
        var c = 1 + idBox - this.width;
        this.boxes[idBox].addNeighbor(c);
    }

    // D
    if (testD) {
        var d = idBox - 1;
        this.boxes[idBox].addNeighbor(d);
    }

    // E
    if (testE) {
        var e = idBox + 1;
        this.boxes[idBox].addNeighbor(e);
    }

    // F
    if (testD && testG) {
        var f = idBox + this.width - 1;
        this.boxes[idBox].addNeighbor(f);
    }

    // G
    if (testG) {
        var g = idBox + this.width;
        this.boxes[idBox].addNeighbor(g);
    }

    // H
    if (testE && testG) {
        var h = 1 + idBox + this.width;
        this.boxes[idBox].addNeighbor(h);
    }

    return this.boxes[idBox].getNeighbors();
};

Board.prototype.populate = function () {
    for (var i = 0; i < this.nbBombs; i++) {
        var random;
        do {
            random = Math.floor(Math.random() * this.width * this.height);
        }
        while (this.boxes[random].getValue() === "b");

        this.boxes[random].setValue("b");
        this.boxes[random].setNeighbors(this.findNeighbors(random));

        for (var j = 0, len = this.boxes[random].getNeighbors().length; j < len; j++) {
            var boxId = this.boxes[random].getNeighbor(j);
            if (this.boxes[boxId].getValue() !== "b") {
                this.boxes[boxId].increaseValue();
            }
        }
    };
};

Board.prototype.getBoxes = function () {
    return this.boxes;
};

Board.prototype.getBox = function (id) {
    return this.boxes[id];
};

Board.prototype.getValue = function (idBox) {
    return this.boxes[idBox].getValue();
};
