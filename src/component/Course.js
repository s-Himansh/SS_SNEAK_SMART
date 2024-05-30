import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './Course.css';

export default function Course() {
   const subjectCode = localStorage.getItem("subjectCode");
   const user = JSON.parse(localStorage.getItem("userData"));

   const [subjectData, setSubjectsData] = useState({ subjectName: '', subjectCode: '', description: '', classes: [] });
   const [completionData, setCompletionData] = useState({ userid: '', subjectCode: '', completion: [] });

   useEffect(() => {
      const fetchData = async () => {
         try {
            const response = await fetch('http://localhost:5000/lms/getsubject', {
               method: 'GET',
               headers: {
                  'Content-Type': 'application/json',
                  'Authorization': `Bearer ${subjectCode}`,
               },
            });

            if (!response.ok) {
               throw new Error('Failed to fetch user data');
            }

            const data = await response.json();
            await setSubjectsData({
               subjectName: data.name, subjectCode: data.code, description: data.description, classes: data.classes
            });
         } catch (error) {
            console.error('Error fetching user data:', error.message);
         }
      };


      const fetchCompletionData = async () => {
         try {
            const response = await fetch('http://localhost:5000/lms/completstatus', {
               method: 'GET',
               headers: {
                  'Content-Type': 'application/json',
                  'Authorization': `Bearer ${user.id}`,
               },
            });

            if (!response.ok) {
               throw new Error('Failed to fetch completion data');
            }
            const completionData = await response.json();

            console.log("this is ", completionData);

            await setCompletionData({
               userid: completionData._id, subjectCode: completionData.subjectcode, completion: completionData.completion
            });
         } catch (error) {
            console.log(error.message);
         }
      }

      fetchData();
      fetchCompletionData();
   }, [subjectCode, user.id]);

   // console.log("classes are ", subjectData.classes);
   // console.log(completionData.completion);
   //console.log(user.id);

   const sentences = [
      "The only way to do great work is to love what you do.",
      "Education is the most powerful weapon which you can use to change the world.",
      "The beautiful thing about learning is that no one can take it away from you.",
      "The roots of education are bitter, but the fruit is sweet.",
      "Education is not the filling of a pail, but the lighting of a fire.",
      "Strive for progress, not perfection.",
      "The expert in anything was once a beginner.",
      "Don't watch the clock; do what it does. Keep going."
   ];

   const [currentSentence, setCurrentSentence] = useState(0);

   useEffect(() => {
      const intervalId = setInterval(() => {
         setCurrentSentence((prevSentence) => (prevSentence + 1) % sentences.length);
      }, 3800);

      return () => clearInterval(intervalId);

   }, []);

   // console.log(global.completion_data);

   const completedTopics = completionData.completion.length;
   const totalTopics = subjectData.classes.length;
   // console.log("some topics ",completedTopics);
   // console.log("total topics ",totalTopics);
   // console.log(totalTopics);
   const progressArray = Array(totalTopics).fill(0);
   // completedTopics.forEach(index => {
   //    if (index >= 0 && index < totalTopics) {
   //       progressArray[index] = 100;
   //    }
   // });

   const percentage = (completedTopics / totalTopics) * 100;
   // console.log(percentage);
   return (
      <div className="container-fluid">
         <div className="row">
            <>
               {/* Left side (Course Details) */}
               <div className="col-lg-6">
                  <div className="container d-flex flex-column align-items-center justify-content-center vh-100 bg-dark">
                     <div className="mx-auto w-75">
                        <h4 className='text-light'>Welcome, {user.user.name} </h4>
                        <hr className="bg-white" />
                        <h1 className="text-center mb-4 text-white">Course Details</h1>

                        <div className="input-group mb-3">
                           <span className="input-group-text" id="basic-addon1">
                              #
                           </span>
                           <input type="text" className="form-control border-4" placeholder="Subject Name" aria-label="Subject Name" aria-describedby="basic-addon1" name="subjectname" value={subjectData.subjectName} disabled />
                        </div>

                        <div className="input-group mb-3">
                           <input type="text" className="form-control border-4" placeholder="Subject Code" aria-label="Subject Code" name="subjectcode" value={subjectData.subjectCode} disabled />
                        </div>

                        <div className="input-group mb-3">
                           <span className="input-group-text">Description</span>
                           <div className="form-control border-4" aria-label="Course Description">
                              {subjectData.description}
                           </div>
                        </div>

                        <div className="d-grid gap-2">
                           <Link to="/home" className="btn btn-secondary mb-3">
                              Back to Home
                           </Link>
                        </div>
                        <hr className="bg-white mt-5" />
                     </div>
                  </div>
               </div>

               {/* <div className="col-lg-6">
            <div className="d-flex flex-column align-items-center bg-dark vh-100 overflow-auto">
              <h2 className="text-center mb-4 text-white mt-5">Course Progress</h2>
              <CourseProgressGraph data={courseProgressData} />
            </div>
          </div> */}

               {/* Right side (List of Classes) */}
               <div className="col-lg-6">
                  <div className="d-flex flex-column align-items-center bg-dark vh-100 overflow-auto">
                     <h2 className="text-center mb-4 text-white mt-5">Classes</h2>
                     <Link to='/class' className='btn text-light border border-dark text-light' style={{ background: 'linear-gradient(45deg, #158c43, #023616)' }}>Open classes</Link>
                     <h5 className="text-muted mt-4 text-center" style={{ paddingTop: '80px' }}>
                        {sentences[currentSentence]}
                     </h5>
                     <div className="mx-auto w-100 mt-5" style={{ paddingTop: '30px', }}>
                        <h2 className="text-center mb-4 text-white ">Course Progress for {user.user.nickname}</h2>
                        {/* <CourseProgressGraph data={courseProgressData} /> */}
                           <div style={{ width: '220px', height: '220px', textAlign: 'right', marginLeft: '250px', paddingTop: '30px' }} className='circular-progress-container'>
                              <CircularProgressbar
                                 value={percentage}
                                 text={`${Math.round(percentage)}%`}
                                 styles={buildStyles({
                                    rotation: 0,
                                    pathTransition: 'stroke-dashoffset 0.5s ease-in-out',
                                    pathColor: `#086938`,
                                    trailColor: '#d6d6d6',
                                    textColor: 'aquamarine',
                                    textSize: '16px',
                                    backgroundColor: '#3e98c7',
                                 })}
                              />
                           </div>
                     </div>
                  </div>
               </div>
            </>

         </div>
      </div >
   )
}
