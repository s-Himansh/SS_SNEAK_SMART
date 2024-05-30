const mongoose = require('mongoose');
const Config = require('./config');


const connection = async() => {
    try {
        const res = await mongoose.connect(Config.url);
        if (res){
            console.log("connected to the database");
            const subjects = mongoose.connection.db.collection("subjects");
            const subjectDesc = mongoose.connection.db.collection("subjectdescs");
            const completion = mongoose.connection.db.collection("completions");
            const userData = mongoose.connection.db.collection("lmsusers");
            const subjectData = await subjects.find({}).toArray();
            const detailedSubjectData = await subjectDesc.find({}).toArray();
            const completionData = await completion.find({}).toArray();
            const users = await userData.find({}).toArray();

            
            if (subjectData.length > 0 && detailedSubjectData.length > 0){
                global.subjects_data = subjectData;
                global.detailed_subjects_data = detailedSubjectData;
            }

            global.completion_data = completionData;
            global.user_data = users;
            //console.log(global.completion_data);
            // console.log(global.detailed_subjects_data);

        }

    } catch (error) {
        console.log("error here");
        console.log(error.message);
    }
}

module.exports = connection;

// thIpTsCH2eZOhPPI