var express         =   require('express');
var requestChecker  =   require('./middleware.js');
var app             =   express();

/* Add the middleware to express app */
app.use(requestChecker);

// Another middleware, will get executed after above one.
// // Order of middleware is sequential.
//
app.use(function(req,res) {
	res.send('Hello there !');
});

app.listen(3000);
