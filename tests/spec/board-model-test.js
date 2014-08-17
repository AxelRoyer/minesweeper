describe("board-model", function () {

    var board;

    beforeEach(function () {
        board = new Board({
            controller:{},
            width: 10,
            height:12,
            nbBombs: 20
        });
    })

    describe("constructor", function () {
        it("should be an instance of Board", function () {
            expect(board instanceof Board).toBe(true);
        });
    });

    describe("should be instanciated", function () {
        it("with the game controller as a parameter", function () {
            expect(typeof board.controller).toBe("object");
        });

        it("with with property setted to 10", function () {
            expect(board.width).toBe(10);
        });

        it("with height property setted to 12", function () {
            expect(board.height).toBe(12);
        });

        it("with nbBombs property setted to 20", function () {
            expect(board.nbBombs).toBe(20);
        });

        it("with an array of boxes", function () {
        	expect(board.boxes instanceof Array).toBe(true);
        });
    });
});

