global.$ = require("jQuery");
global.jQuery = global.$;

require("./services/VueContainer.js").getInstance();
require("../../node_modules/bootstrap-sass/assets/javascripts/bootstrap.min.js");
require("./components/Header.vue");
