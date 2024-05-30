import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Loading from '../component/Loading';
import './Home.css';

export default function Home() {
   const [loading, setLoadingStatus] = useState(false);


   let navigate = useNavigate();
   const handleLogout = () => {
      setLoadingStatus(true);

      setTimeout(() => {
         localStorage.clear();
         setLoadingStatus(false);
         navigate('/login');
      }, 3000);
   };

   const handleProfile = () => {
      setLoadingStatus(true);

      setTimeout(() => {
         setLoadingStatus(false);
         navigate('/userprofile');
      }, 3000);
   };


   const [subjects, setSubjects] = useState([]);

   const loadSubjectsData = async () => {
      let response = await fetch("http://localhost:5000/lms/subjects", { method: "POST", headers: { 'Content-type': 'application/json' } });
      response = await response.json();

      // console.log(response[0]);
      setSubjects(response[0]);
   }

   useEffect(() => {
      loadSubjectsData();
   }, []);

   const handleClassRoute = (code) => {
      try {
         setLoadingStatus(true);

         setTimeout(() => {
            localStorage.setItem("subjectCode", code);
            setLoadingStatus(false);
            navigate(`/subject/${code}`);
         }, 3000);
      } catch (error) {
         console.log(error.message);
      }
   }

   const handleClassmates = () => {
      setLoadingStatus(true);

      setTimeout(() => {
         setLoadingStatus(false);
         navigate('/classmates');
      }, 3000);
   }

   return (
      <div>
         <div>
            {
               !loading ?

                  <nav className="navbar navbar-expand-lg bg-body-tertiary navbar-dark bg-dark" style={{ background: 'linear-gradient(to right, #c2bcbc, #3b3838)', padding: '20px', color: 'white', textAlign: 'center', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                     <div className="container-fluid">
                        <Link to='/' className="navbar-brand text-dark" style={{ textDecoration: 'none', fontSize: '24px', fontWeight: 'bold' }}>
                           <span style={{ color: '#0f572a' }}>SS </span>
                           <span style={{ borderBottom: '2px solid black' }}>SNEAK</span>
                           <span style={{ color: '#000000', borderBottom: '2px solid #fff' }}> SMART</span>
                        </Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                           <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                           <ul className="navbar-nav ms-auto">

                              {
                                 !localStorage.getItem("authToken") ?
                                    <>
                                       <li className="nav-item ">
                                          <Link className="nav-link btn btn-light text-dark ms-4 mx-2" to='/signup' style={{ backgroundColor: '#e4f2e7' }}>SignUp</Link>
                                       </li>
                                       <li className="nav-item">
                                          <Link className="nav-link btn btn-light text-dark ms-4 mx-2" to='/login' style={{ backgroundColor: '#e4f2e7' }}>Login</Link>
                                       </li>
                                    </>
                                    : ""
                              }
                              {
                                 localStorage.getItem("authToken") ?
                                    <>
                                       <li className="nav-item ms-auto">
                                          <button className="nav-link btn btn-light text-dark mx-4" onClick={handleClassmates} style={{ backgroundColor: '#e4f2e7' }}>Your Classmates</button>
                                       </li>
                                       <li className="nav-item ms-auto">
                                          <button className="nav-link btn btn-light text-dark" onClick={handleProfile} style={{ backgroundColor: '#e4f2e7' }}>Your Profile</button>
                                       </li>
                                       <li className="nav-item ms-auto">
                                          <button className="nav-link btn btn-light text-dark ms-4 mx-2" onClick={handleLogout} style={{ backgroundColor: '#e4f2e7' }}>
                                             {loading ? <Loading /> : 'Logout'}
                                          </button>
                                       </li>
                                    </>

                                    : ""
                              }
                           </ul>
                        </div>
                     </div>
                  </nav>
                  : <Loading />
            }
         </div>

         <div className='container mt-4'>
            <div className='row'>
               {subjects.map((subject, index) => (
                  <div key={index} className='col-lg-4 mb-4'>
                     <div className='card'>
                        <div className='card-body'>
                           <h5 className='card-title'>{subject.subjectname}</h5>
                           <p className='card-text'>Subject Code: {subject.subjectcode}</p>
                           <button className='btn btn-success' onClick={() => handleClassRoute(subject.subjectcode)}>
                              {/* {console.log(subject)} */}
                              Open Class
                           </button>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
   )
}
