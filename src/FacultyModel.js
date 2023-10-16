const mongoose = require('mongoose');

const facultySchema = mongoose.Schema({
    _id: String,
    image: String,
    name: String,
    email: String,
    contact: String,
    sitting: String,
    designation: String,
    education: String,
}, { versionKey: '' })

module.exports = mongoose.model('Faculty', facultySchema);