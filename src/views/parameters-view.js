var ParametersView = function (controller) {
	this.controller = controller;
	var self = this;

    document.getElementById("parametersBackButton").addEventListener("click", function () {
        self.controller.clickBackButton();
    });

    document.getElementById("clearDataToDefault").addEventListener("click", function () {
    	self.controller.clickClearData();
    });

    document.forms[0].language.addEventListener("change", function () {
        self.controller.onchangeLanguage(this.value);
    })
};

ParametersView.prototype.populateSizeSelection = function (size, form, max, currentParameters) {
    form.options.length = 0;
    var nbBoxes = 0;
    for (var i = 0, len = max; i < len; i++) {
        nbBoxes += 5;

        if (nbBoxes < max) {
            form.options[i] = new Option(nbBoxes, nbBoxes);
        } else {
            form.options[i] = new Option("max: " + max, max);
            break;
        }
    };
    form.value = currentParameters[size];
};

ParametersView.prototype.updateParameters = function (currentParameters, maxWidth, maxHeight) {
    var form = document.forms["parametersForm"];

    form.language.value = currentParameters.language;
    form.level.value = currentParameters.level;
    form.help.checked = currentParameters.help;

    this.populateSizeSelection("width", form.width, maxWidth, currentParameters);
    this.populateSizeSelection("height", form.height, maxHeight, currentParameters);
};

