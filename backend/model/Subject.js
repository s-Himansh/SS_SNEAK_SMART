const mongoose = require('mongoose');

const subjectSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    code : {
        type : Number,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    classes : {
        type : Array,
        required : true
    }
})

module.exports = mongoose.model('subjectDesc', subjectSchema);