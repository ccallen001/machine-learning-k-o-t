const
	express = require('express'),
	app = express(),
	port = process.env.PORT || 1234;

// set the view engine to ejs
app.set('view engine', 'ejs');

// make express look in the public directory for assets (css/js/img)
app.use(express.static(__dirname + '/public'));

// set the home page route
app.get('/', function (req, res) {

	// ejs render automatically looks in the views folder
	res.render('index');
});

app.listen(port, function () {
	console.log(`server.js is running on http://localhost: ${port}...`);
});