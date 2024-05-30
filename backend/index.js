const express = require('express');
const connection = require('./db');
const app = express();
const PORT = 5000;
const cors = require('cors');

const SignUpUser = require('./Routes/SignUpUser');
const LogInUser = require('./Routes/LogInUser');
const GetUserData = require('./Routes/GetUserData');
const UpdateUserData = require('./Routes/UpdateUserData');
const DisplaySubjects = require('./Routes/DisplaySubjects');
const GetSubject = require('./Routes/GetSubjects');
const GetCompletionStatus = require('./Routes/GetCompletionStatus.js');
const UpdateStatus = require('./Routes/UpdateStatus');
const GetAllUsersData = require('./Routes/GetAllUsers.js');

connection();
app.use(cors());
 
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  })
  
app.use(express.json());



app.use('/lms', SignUpUser);
app.use('/lms', LogInUser);
app.use('/lms', GetUserData);
app.use('/lms', UpdateUserData);
app.use('/lms', DisplaySubjects);
app.use('/lms', GetSubject);
app.use('/lms', GetCompletionStatus);
app.use('/lms', UpdateStatus);
app.use('/lms', GetAllUsersData);


app.listen(PORT, () => {
    console.log(`app listening at ${PORT}`);
})

