var container = require("../Container.js").getInstance();
var path = require("path");

module.exports = function(app) {
    app.get("/", function(req, res) {
        res.sendFile(path.resolve("front/html/index.html"));
    });

    app.get("/report", function(req, res) {
        let api = container.get("Api");
        api.parse(req);
    });
};
