const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// create course Schema & model
const OrdinanceSchema = new Schema({
    ordinance_no:{
        type: Number,
        required: [true, 'Name field is required']

    },
    course_name: {
        type: String,
        required: [true, 'Name field is required']
    },
    course_scheme: {
        type: String
    }
});

const Ordinance = mongoose.model('course', OrdinanceSchema);

module.exports = Ordinance;
