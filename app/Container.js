var dipsy = require("dipsy");

class Container {
    constructor() {

        return dipsy;
    }
}

var instance;
var instantiator = {
    getInstance : function() {
        if (!instance) {
            instance = new Container();
        }
        return instance;
    }
}

module.exports = instantiator;
