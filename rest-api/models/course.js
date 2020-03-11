const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// create course Schema & model
const CourseSchema = new Schema({
    course_name: {
        type: String,
        required: [true, 'Name field is required']
    },
    course_scheme: {
        type: String
    }
});

const Course = mongoose.model('course', CourseSchema);

module.exports = Course;
