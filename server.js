var express = require('express');
var app = express();

app.use(express.static('dist'));

app.listen(8080);
console.log('Server is running on localhost:8080');