// requring express and declaring port
const express = require('express');
const app = express();
const port = 8000;
const path = require('path');
// getting database connection
const db = require(path.join(__dirname, '/config/mongoose.js'));
const expressLayouts = require('express-ejs-layouts');

// serving static files
app.use(express.static('./assets'));

// settings for view engine and layout
app.use(expressLayouts);
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);
app.set('view engine', 'ejs');
app.set('views', './views');

// getting index route
const myRouter = require('./routes');
app.use('/', myRouter);

// running application on predefined port
app.listen(port, function(error) {
    if (error) {
        console.log(`error in running the server at port: ${port} `, error);
        return;
    }
    console.log(`server is running at port: ${port}`);
})