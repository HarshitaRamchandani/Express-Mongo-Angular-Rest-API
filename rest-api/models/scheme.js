const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// create course Schema & model
const SchemeSchema = new Schema({
    scheme_name: {
        type: String,
        required: [true, 'Name field is required']
    },
    scheme_no: {
        type: Number
    }
});

const Scheme = mongoose.model('course', SchemeSchema);

module.exports = Scheme;
