const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const csvSchema = new Schema({
    filename: String,
    filepath: String
}, {
    timestamps: true
})

const CSV = mongoose.model('CSV', csvSchema);
module.exports = CSV;