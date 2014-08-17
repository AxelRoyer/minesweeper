var dialogBox = {};

var ChoicesBox = function (title, message, buttons, callback) {
	var dialogBox = document.createElement("div");
	dialogBox.id = "dialogBox";

	var modal = document.createElement("div");

	var headerContainer = document.createElement("header");
	headerContainer.textContent = title;
	modal.appendChild(headerContainer);

	var textContainer = document.createElement("p");
	textContainer.textContent = message;
	modal.appendChild(textContainer);

	var footer = document.createElement("footer");
	if (buttons) {
		buttons.forEach(function(item) {
			var button = document.createElement("button");
			button.textContent = item.label;
			button.addEventListener("click", function() {
				if (callback)
					callback(item.value);
				document.body.removeChild(dialogBox);
			}.bind(this));
			footer.appendChild(button);
		}.bind(this));
	}

	modal.appendChild(footer);
	dialogBox.appendChild(modal);
	document.body.appendChild(dialogBox);

	document.getElementById("dialogBox").className = "animation-in"
};

dialogBox.alert = function (title, message) {
	new ChoicesBox(title, message, [{label:"OK"}], null);
};

dialogBox.ChoicesBox = function (title, message, buttons, callback) {
	new ChoicesBox(title, message, buttons, callback);
};

dialogBox.info = function (message, level) {
	new InfBox(message, level);
};

var InfoBox = function (message, level) {
	this.infoBox = document.createElement("div");
	infoBox.id = "infoBox";

	var modal = document.createElement("div");
	modal.textContent = message;
	modal.className = level;

	var closeButton = document.createElement("span");
	closeButton.innerHTML = "&times;";
	closeButton.addEventListener("click", function() {
		this.close();
	}.bind(this));
	modal.appendChild(closeButton);
	this.infoBox.appendChild(modal);
	document.body.appendChild(this.infoBox);
};

InfoBox.prototype.close = function () {
	document.body.removeChild(this.infoBox);
};

dialogBox.prompt = function (title, message, placeholder, callback) {
	new PromptBox(title, message, placeholder, callback);
};

var PromptBox = function (title, message, placeholder, callback) {
	this.callback = callback;
	this.element = document.createElement("div");
	this.element.id = "promptBox";
	this.inputText;

	var modal = document.createElement("div");

	var headerContainer = document.createElement("header");
	headerContainer.textContent = title;
	modal.appendChild(headerContainer);

	var textContainer = document.createElement("p");
	textContainer.textContent = message;
	modal.appendChild(textContainer);

	this.inputText = document.createElement("input");
	this.inputText.type = "text";
	this.inputText.id = "inputText"
	this.inputText.placeholder = placeholder;
	modal.appendChild(this.inputText);

	var footer = document.createElement("footer");

	var cancelButton = document.createElement("button");
	cancelButton.textContent = "Cancel";
	cancelButton.addEventListener("click", function () {
		this.cancel();
	}.bind(this));
	footer.appendChild(cancelButton);

	var validationButton = document.createElement("button");
	validationButton.textContent = "Ok";
	validationButton.addEventListener("click", function () {
		this.validate();
	}.bind(this));
	footer.appendChild(validationButton);

	modal.appendChild(footer);
	this.element.appendChild(modal);
	document.body.appendChild(this.element);
	document.getElementById("inputText").focus();

	document.getElementById("promptBox").className = "animation-in"
};

PromptBox.prototype.cancel = function () {
	document.body.removeChild(this.element);
};

PromptBox.prototype.validate = function () {
	this.callback(this.inputText.value);
	document.body.removeChild(this.element);
};
