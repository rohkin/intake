// NODE MODULES
var
	favicon = require("serve-favicon")
	, path = require("path");
// ENVIRONMENT
var environment = process.env.NODE_ENV || "production";
// set production port to 80
var port = process.env.PORT || 80;
// call express
var express = require('express');
// define our app using express
var app = express();
// local variables
app.locals.title = "Intake";
// favicon
//app.use(favicon(path.join(__dirname, "/public/favicon.png")));
// initialize jade view engine
app.set("views", path.join(__dirname, "/views"));
app.set("view engine", "jade");
// disable x-powered-by header
app.set("x-powered-by", false);
// set tag to strong
app.set("tag", "strong");
// set json callback
app.set("json callback name", "callback");
// serve static folder
app.use(express.static(path.join(__dirname, "/public")));

// routing
require("./routes/appointment.js")(app);
require("./routes/index.js")(app);
require("./routes/intake.js")(app);
require("./routes/remark.js")(app);
require("./routes/student.js")(app);
require("./routes/user.js")(app);

// Handle 404, file/page not found
app.all('*', function (request, response) {
	response.render("404");
});
// Start the Server
app.listen(port);