var express = require("express");
var app = express();

app.get("/", function (req, res) {
	console.log("Got a json for the homepage");
	var dateString = Date();
	res.send(JSON.stringify({ data: dateString }));
});

app.listen(3001, function () {
	console.log("Example app listening on port 3001!");
});
