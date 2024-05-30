const mongoose = require('mongoose');

const completionSchema = new mongoose.Schema({
    userid : {
        type : String,
        required : true
    },
    subjectcode : {
        type : Number,
        required : true
    },
    completion : {
        type : Array,
        required : true
    }
});

module.exports = mongoose.model('completion', completionSchema);