let http = require('http');
let path = require('path');

let express = require('express');
let bodyParser = require('body-parser');
let compression = require('compression');
let logger = require('morgan');

let port = 3050;

let app = express();

app.use(express.static(path.join(__dirname, 'dist')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.listen(port, () => {

});