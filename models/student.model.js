const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let StudentSchema = new Schema({
    name: {type : String, required: true, max: 20},
    regno: {type : String, required: true, max: 20},
    course: {type : String, required: true, max: 20}
});

module.exports = mongoose.model('Student', StudentSchema);