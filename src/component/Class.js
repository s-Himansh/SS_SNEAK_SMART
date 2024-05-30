import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import EnterForm from '../screens/EnterForm';

export default function Class() {
   const subjectCode = localStorage.getItem('subjectCode');
   const userId = localStorage.getItem('userId');
   const [clickedIndex, setClickedIndex] = useState('');
   const [completedClasses, setCompletedClasses] = useState([]);
   const [subjectData, setSubjectsData] = useState({
      subjectName: '',
      subjectCode: '',
      description: '',
      classes: '',
   });

   useEffect(() => {
      const fetchData = async () => {
         try {
            const response = await fetch('http://localhost:5000/lms/getSubject', {
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
            if (data === null) {
               sendCompletionStatus();
            }
            console.log('data is ', data);
            setSubjectsData({
               subjectName: data.name,
               subjectCode: data.code,
               description: data.description,
               classes: data.classes,
            });
         } catch (error) {
            console.error('Error fetching user data:', error.message);
         }
      };

      const getCompletionData = async () => {
         try {
            const response = await fetch('http://localhost:5000/lms/completstatus', {
               method: 'GET',
               headers: {
                  'Content-Type': 'application/json',
                  'Authorization': `Bearer ${userId}`,
               },
            })

            if (!response.ok) {
               // throw new Error('Failed to fetch user data');
               console.log('Failed to fetch user data');
            }

            const data = await response.json();
            console.log(data);
            setCompletedClasses(data.completion);
            console.log('value is ', data.completion);
         } catch (error) {
            sendCompletionStatus();
            console.log(error.message);
         }
      }
      fetchData();
      sendCompletionStatus();
      getCompletionData();
   }, [subjectCode, userId]);

   const classesList = Array.isArray(subjectData.classes) ? subjectData.classes : Object.values(subjectData.classes);

   const sendCompletionStatus = async (updatedClasses) => {
      try {
         console.log('entered the function ', completedClasses.length);
         const sendingData = await { userid: userId, subjectcode: subjectCode, completion: updatedClasses !== null ? updatedClasses : [0] };
         console.log(sendingData.completion);
         const response = await fetch('http://localhost:5000/lms/addstatus', {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json',
               'Authorization': `Bearer ${userId}`,
            },
            body: JSON.stringify(sendingData),
         })
      } catch (error) {
         console.log(error.message);
      }
   }
   // console.log(completedClasses);

   const saveClickedIndex = (idx) => {
      setClickedIndex(idx);
   };

   const toggleCompletion = (idx) => {
      const updatedClasses = completedClasses.includes(idx)
         ? completedClasses.filter((item) => item !== idx)
         : [...completedClasses, idx];

      // console.log('updated ', updatedClasses);
      // console.log('Data before state update:', { userid: userId, subjectcode: subjectCode, completion: updatedClasses });

      setCompletedClasses(updatedClasses); // Update the state immediately

      // Log the data after updating the state
      // console.log('Data after state update:', { userid: userId, subjectcode: subjectCode, completion: updatedClasses });

      sendCompletionStatus(updatedClasses);
   };

   // useEffect(() => {
   //    console.log('completedClasses changed:', completedClasses);
   //    sendCompletionStatus(completedClasses);
   // }, [completedClasses]);

   const [searchTerm, setSearchTerm] = useState('');

   const filteredClasses = classesList.filter((className) =>
      className[0].toLowerCase().includes(searchTerm.toLowerCase())
   );


   return (
      <div className="container-fluid">
         <Link to={`/subject/${subjectCode}`} type="button" className="btn btn-outline-light btn-sm position-absolute top-0 start-0 mt-2 ms-2" >
            ← Back
         </Link>
         <div className="row">
            {/* Left side (Vertical Navbar for Classes) */}
            <div className="col-lg-3 bg-dark vh-100 overflow-auto">
               <div className="d-flex flex-column align-items-center">
                  <ul className="list-group mb-2 mt-5" style={{ marginTop: '150px' }}>
                     {filteredClasses.map((className, index) => (
                        <li
                           key={index}
                           className={`list-group-item text-black ${completedClasses.includes(index) ? 'bg-success' : ''
                              }`}
                           onClick={() => saveClickedIndex(index)}
                           style={{
                              width: '100%',
                              marginBottom: '8px',
                              backgroundColor: 'rgb(221, 233, 243)',
                              cursor: 'pointer'
                           }}
                        >
                           {className[0]} Topic
                        </li>
                     ))}
                  </ul>
               </div>
            </div>

            {/* Right side (List of Classes) */}
            <div className="col-lg-9">
               <div className="d-flex flex-column align-items-center bg-dark vh-100 overflow-auto">
                  <div className="input-group mb-3 mt-2">
                     <input
                        type="text"
                        className="form-control"
                        placeholder="Search topics..."
                        onChange={(e) => setSearchTerm(e.target.value)}
                        style={{ maxWidth: '200px', marginLeft : '900px' }}
                     />
                  </div>
                  {/* <button className='text-light border' onClick={() => sendCompletionStatus(completedClasses)}>Update Data</button> */}
                  <h6 className='text-light'>Page : {clickedIndex + 1}</h6>
                  <h2 className="text-center mb-4 text-white mt-5">Topic Details </h2>
                  <div className="mx-auto w-75 overflow-auto">
                     {clickedIndex === '' ? (
                        <ul
                           className="list-group mb-2"
                           style={{ maxHeight: '400px', overflowY: 'auto' }}
                        >
                           {classesList.map((className, index) => (
                              <li key={index} className="list-group-item rounded">
                                 {className}
                              </li>
                           ))}
                        </ul>
                     ) : (
                        <>

                           <h6 className='text-light mb-5' >{subjectData.classes[clickedIndex][1]}</h6>
                           <button
                              className="btn btn-success"
                              onClick={() => toggleCompletion(clickedIndex)}
                              style={{ marginBottom: '10px' }}
                           >  {!completedClasses.includes(clickedIndex) ?
                              "Mark as Done ✓"
                              : "Mark as UnDone X"
                              }
                           </button>
                           <Link className='btn btn-success' to='/meetroom' style={{ marginBottom: '10px', marginLeft: '10px' }}>Attend Meeting [Room ID - {subjectData.classes[clickedIndex][2]} ]</Link>
                           <h3 className='text-light'>{completedClasses}</h3>
                        </>
                     )}
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
