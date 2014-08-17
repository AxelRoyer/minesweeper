var Parameters = function () {
    this.parameters = null;

	this.initParameters();
    this.initSize();

	if (!this.parameters) {
		this.initDefaultParameters();
	}
};

Parameters.prototype.initSize = function () {
    var screenWidth = utils.getElementWidth(window);
    var screenHeight = utils.getElementHeight(window) - 150;
    this.maxWidth = (screenWidth / 55).toFixed();
    this.maxHeight = (screenHeight / 50).toFixed();
};

Parameters.prototype.getNbBombs = function (level) {
    return (this.parameters.width * this.parameters.height * level * 0.03).toFixed();
};

Parameters.prototype.initParameters = function () {
    if (localStorage && localStorage.getItem("parameters")) {
        var json_parameters = localStorage.getItem("parameters");
        var parameters = JSON.parse(json_parameters);
        parameters.height = parseInt(parameters.height);
        parameters.width = parseInt(parameters.width);
        parameters.level = parseFloat(parameters.level);
        parameters.nbBombs = parseInt(parameters.nbBombs);

        this.parameters = parameters;
    }
};

Parameters.prototype.saveParameters = function () {
    var form = document.forms["parametersForm"];

    var parameters = {
        language:form.language.value,
        level:form.level.value,
        help:form.help.checked,
        width:form.width.value,
        height:form.height.value,
        nbBombs: this.getNbBombs(form.level.value)
    }

    this.parameters = parameters;
};

Parameters.prototype.initDefaultParameters = function () {
    this.parameters = {
        height: 5,
        width: 5,
        level: 3,
        nbBombs: 5,
        help: true,
        language: "en-US"
    }
};

Parameters.prototype.getParameters = function () {
    return this.parameters;
};

Parameters.prototype.getLanguage = function () {
    return this.parameters.language;
}

Parameters.prototype.setLanguage = function (language) {
    this.parameters.language = language;
    document.documentElement.lang = document.webL10n.setLanguage(language);
}
