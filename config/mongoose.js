require('dotenv').config();

const mongoose = require('mongoose');

// connecting to the database
mongoose.connect(process.env.MONGODB_URI);
// storing the connection in db variable
const db = mongoose.connection;

db.on('error', console.error.bind('console', 'error connecting to MongoDB'));
db.once('open', () => console.log('connected to database: MongoDB'));

module.exports = db;