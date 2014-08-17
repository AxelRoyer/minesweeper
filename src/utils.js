window.utils = {};

utils.deleteChildrens = function (elem) {
    var element = document.getElementById(elem);
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    };
};

utils.getElementWidth = function (container) {
    return container.innerWidth;
};

utils.getElementHeight = function (container) {
    return container.innerHeight;
};

utils.saveItemInDB = function (key, data) {
	if (localStorage) {
		localStorage.setItem(key, JSON.stringify(data));
	}
};

utils.getItemInDB = function (key) {
	if (localStorage) {
		return JSON.parse(localStorage.getItem(key));
	}
};

utils.eraseDB = function () {
	if (localStorage) {
		localStorage.clear();
    }
};
