function BoardView (controller, width, height) {
    if (document.getElementById("board").firstChild) {
        utils.deleteChildrens("board");
    };

    this.controller = controller;
    this.createDom(width, height);
};

BoardView.prototype.updateBox = function (id, box) {
    var boxDom = document.getElementById(id);

    if (box.flaged){
        boxDom.className = "flaged";
    }else if (box.clicked){
        if (box.value > 0){
            boxDom.textContent = box.value;
        }
        if (box.value === 0){
            boxDom.className = "empty";
        }else if (box.value === "b"){
            boxDom.className = "bomb";
        }else{
            boxDom.className = "value"+box.value;
        }
    }else{
        boxDom.className = "unclicked"
    }
};

BoardView.prototype.createDom = function (nbx, nby) {
    var self = this;
    var board = document.getElementById('board');

    var fragment = document.createDocumentFragment();

    var id = 0;
    for (var i = 0; i < nby ; i++) {
        var line = document.createElement('div');

        for (var j = 0; j < nbx ; j++) {
            var box = document.createElement('div');
            box.id = id;
            box.className = 'unclicked';
            box.addEventListener("dblclick",function (e) {
                self.controller.doubleClick(this.id);
            }, false);
            box.addEventListener('click', function () {
                self.controller.click(this.id);
            }, false);
            box.addEventListener("contextmenu",function (e) {
                self.controller.rightClick(this.id);
                e.preventDefault();
            }, false);
            line.appendChild(box);
            id++;
        }
        fragment.appendChild(line);
    }

    board.appendChild(fragment);
};

BoardView.prototype.updateBoxes = function (boxes) {
    var self = this;
    boxes.forEach(function (item, i) {
        self.updateBox(i, item);
    })
};


