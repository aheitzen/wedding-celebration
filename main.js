var express = require('express');
var app = express();

app.use('/', express.static('app'));

app.listen(process.env.PORT, function () {
	console.log('listening on port 8080');
})
