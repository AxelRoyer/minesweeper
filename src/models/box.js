"use strict"

var Box = function () {
    this.value = 0;
    this.clicked = false;
    this.flaged = false;
    this.neighbors = [];
};

Box.prototype.getValue = function () {
    return this.value;
};

Box.prototype.setValue = function (value) {
    this.value = value;
};

Box.prototype.toogleClick = function () {
    this.click = !this.click;
};

Box.prototype.getClickedStatus = function () {
    return this.clicked;
};

Box.prototype.setClicked = function (value) {
    this.clicked = value;
};

Box.prototype.getFlagedStatus = function () {
    return this.flaged;
};

Box.prototype.toogleFlaged = function () {
    this.flaged = !this.flaged;
};

Box.prototype.setFlaged = function (flaged) {
    this.flaged = flaged;
}

Box.prototype.getNeighbors = function () {
    return this.neighbors;
};

Box.prototype.setNeighbors = function (neighbors) {
    this.neighbors = neighbors;
};

Box.prototype.addNeighbor = function (neighbor) {
    this.neighbors.push(neighbor);
};

Box.prototype.getNeighbor = function (index) {
    return this.neighbors[index];
};

Box.prototype.increaseValue = function () {
    this.value++;
};
