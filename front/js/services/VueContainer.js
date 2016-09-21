var Vue = require("vue");


/**
 * Components Requires
 */

var _Header = require("../components/Header.vue");

/**
 * Class
 */

class VueContainer {
    constructor() {
        this.Vue = Vue;
        this.assembleComponents();
        this.loadConfig();
        return new this.Vue(this.config);
    }

    loadConfig() {
        this.config = {
            debug: true,
            el: "body"
        };
    }

    assembleComponents() {
        this.Vue.component("main-header", _Header);
    }
}

var instance;
var instantiator = {
    getInstance: function() {
        if (!instance) {
            instance = new VueContainer();
        }
        return instance;
    }
}

module.exports = instantiator;

