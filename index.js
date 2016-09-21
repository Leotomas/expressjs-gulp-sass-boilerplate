var express = require("express");
var app = express();

app.use(express.static("public"));
require("./app/http/routes.js")(app);

app.listen(5000, function() {
    console.log("server started");
});


