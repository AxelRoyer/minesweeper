var ParametersCtrl  = function (minesweeper) {
    this.mainCtrl = minesweeper;
    this.model = new Parameters(this);
    this.view = new ParametersView(this);
};

ParametersCtrl.prototype.clickBackButton = function () {
    this.model.saveParameters();
    utils.saveItemInDB("parameters", this.model.getParameters());
    this.mainCtrl.view.showHomePage("parameters");
};

ParametersCtrl.prototype.clickClearData = function () {
    this.model.initDefaultParameters();
    utils.eraseDB();
    this.view.updateParameters(this.model.getParameters(), this.model.maxWidth, this.model.maxHeight);
};

ParametersCtrl.prototype.showPage = function () {
    this.view.updateParameters(this.model.getParameters(), this.model.maxWidth, this.model.maxHeight);
};

ParametersCtrl.prototype.getParameters = function () {
	return this.model.getParameters();
};

ParametersCtrl.prototype.onchangeLanguage = function (language) {
    this.model.setLanguage(language);
};

ParametersCtrl.prototype.initLanguage = function () {
    //if there is a saved language in the game
    if (this.parameters != null && this.model.getLanguage()){
        document.documentElement.lang = document.webL10n.setLanguage(this.parameters.language);
        console.log("saved language");
    }
    else{
        var browserLanguage = document.webL10n.getLanguage();
        var acceptedLanguages = ['en-US','fr-FR'];

        //if browser language is supported by the game, set this language
        if (acceptedLanguages.indexOf(browserLanguage) >= 0){
            document.documentElement.lang = browserLanguage;
            this.model.setLanguage(browserLanguage);
            console.log("browser language");
        }
        //else set default language (en-US)
        else{
            document.documentElement.lang = document.webL10n.setLanguage("en-US");
            this.model.setLanguage("en-US");
            console.log("default language");
        }
    }
    document.documentElement.dir = document.webL10n.getDirection();
};
