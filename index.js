const express = require('express');
const app = express();
const port = 8000;
const path = require('path');
const db = require(path.join(__dirname, '/config/mongoose.js'));
const expressLayouts = require('express-ejs-layouts');

app.use(express.static('./assets'));

app.use(expressLayouts);
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);
app.set('view engine', 'ejs');
app.set('views', './views');


const myRouter = require('./routes');
app.use('/', myRouter);

app.listen(port, function(error) {
    if (error) {
        console.log(`error in running the server at port: ${port} `, error);
        return;
    }
    console.log(`server is running at port: ${port}`);
})