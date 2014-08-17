describe("parameters-model", function () {
    var parametersModel = null;
    var controller = null;

        beforeEach(function () {
            controller = {};
            parametersModel = new Parameters(controller);
        });

    describe("constructor", function () {
        it("should be an instance of Parameters", function () {
            expect(parametersModel instanceof Parameters).toBe(true);
        });
    });

    describe("initSize function", function () {

    });

    describe("getNbBombs function", function () {
        it("should return 2 when level is 3 and widht = 10 and height = 10", function () {
            parametersModel.width = 10;
            parametersModel.height = 10;

            expect(parametersModel.getNbBombs(3)).toBe('2');
        });

        it("should return 4 when level is 4.8 and widht = 10 and height = 10", function () {
            parametersModel.width = 10;
            parametersModel.height = 10;

            expect(parametersModel.getNbBombs(4.8)).toBe('4');
        });

        it("should return 2 when level is 2.1 and widht = 10 and height = 10", function () {
            parametersModel.width = 10;
            parametersModel.height = 10;

            expect(parametersModel.getNbBombs(2.1)).toBe('2');
        });
    });
});
