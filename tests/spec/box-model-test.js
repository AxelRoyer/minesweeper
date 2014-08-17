describe("box-model", function() {

    var box;

    beforeEach(function () {
        box = new Box();
    })

    describe("constructor", function () {
        it("should be an instance of Box", function () {
            expect(box instanceof Box).toBe(true);
        });
    });

    describe("should be instanciated", function () {
        it("with value property setted to 0", function () {
            expect(box.value).toBe(0);
        });

        it("with clicked property setted to false", function () {
            expect(box.clicked).toBe(false);
        });

        it("with flaged property setted to false", function () {
            expect(box.flaged).toBe(false);
        });

        it("with neighbors property setted to an empty array", function () {
            expect(box.neighbors.length).toBe(0);
        });
    });

    describe("getValue function", function () {
        it("should return 0 after initialisation", function () {
            expect(box.getValue()).toBe(0);
        });
    });

    describe("setValue function", function () {
        it("should set 1 to the value after the function ", function () {
            box.setValue(1);
            expect(box.value).toBe(1);
        });
    });

    describe("toogleClick function", function () {
        it("should toogle the click value", function () {
            box.toogleClick();
            expect(box.click).toBe(true);
        });
    });

    describe("toogleFlaged function", function () {
        it("should toogle the flaged value", function () {
            box.toogleFlaged();
            expect(box.flaged).toBe(true);
        });
    });

    describe("getNeighbors function", function () {
        it("should return an empty array after initialisation", function () {
            expect(box.getNeighbors().length).toBe(0);
        });

        it("should return an array with one element", function () {
            box.neighbors.push("test");
            expect(box.getNeighbors().length).toBe(1);
        });

        it("should return an array with a test element", function () {
            box.neighbors = ["hello"];
            expect(box.getNeighbors()[0]).toBe("hello");
        });

        it("should set neighbors with an array with test element", function () {
            box.setNeighbors(["test"]);
            expect(box.neighbors[0]).toBe("test");
        });
    });

    describe("setNeighbors function", function () {
        it("should set neighbors with an array with test element", function () {
            box.setNeighbors(["test"]);
            expect(box.neighbors[0]).toBe("test");
        });
    });

    describe("addNeighbor function", function () {
        it("should set neighbors with an array with test element", function () {
            box.neighbors.length = 0;
            box.addNeighbor("test");
            expect(box.neighbors[0]).toBe("test");
        });
    });
});
