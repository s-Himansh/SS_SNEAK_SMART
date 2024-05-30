import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Loading from '../component/Loading';

export default function NavBar() {
   const [loading, setLoadingStatus] = useState(false);

   let navigate = useNavigate();
   const handleLogout = () => {
      setLoadingStatus(true);

      setTimeout(() => {
         localStorage.clear();
         setLoadingStatus(false);
         navigate('/login');
      }, 2000);
   };

   const handleProfile = () => {
      setLoadingStatus(true);

      setTimeout(() => {
         setLoadingStatus(false);
         navigate('/userprofile');
      }, 2000);
   };

   const handleHome = () => {
      setLoadingStatus(true);

      setTimeout(() => {
         setLoadingStatus(false);
         navigate('/home');
      }, 2000);
   }

   const handlePricing = () => {
      setLoadingStatus(true);

      setTimeout(() => {
         setLoadingStatus(false);
         navigate('/pricing');
      }, 2000);
   }

   return (
      <div>
         {
            !loading ?
               <nav className="navbar navbar-expand-lg bg-body-tertiary navbar-dark bg-dark text-dark" style={{ background: 'linear-gradient(to right, #158c43, #023616)', padding: '20px', color: 'white', textAlign: 'center', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                  <div className="container-fluid">
                     <Link to='/' className="navbar-brand text-dark" style={{ textDecoration: 'none', fontSize: '24px', fontWeight: 'bold' }}>
                        <span style={{ color: '#8cc084' }}>SS </span>
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
                                    <li className="nav-item ms-auto">
                                       <button className="nav-link btn btn-light text-dark ms-4 mx-2" onClick={handlePricing} style={{ backgroundColor: 'rgb(221, 233, 243)' }}>
                                          Pricing
                                       </button>
                                    </li>
                                    <li className="nav-item ">
                                       <Link className="nav-link btn btn-light text-dark ms-4 mx-2" style={{ backgroundColor: 'rgb(221, 233, 243)' }} to='/signup'>SignUp</Link>
                                    </li>
                                    <li className="nav-item">
                                       <Link className="nav-link btn btn-light text-dark ms-4 mx-2" to='/login' style={{ backgroundColor: 'rgb(221, 233, 243)' }}>Login</Link>
                                    </li>
                                 </>
                                 : ""
                           }
                           {
                              localStorage.getItem("authToken") ?
                                 <>
                                    <li className="nav-item ms-auto">
                                       <button className="nav-link btn btn-light text-dark ms-4 mx-2" onClick={handleHome} style={{ backgroundColor: 'rgb(221, 233, 243)' }}>
                                          {loading ? <Loading /> : 'Home'}
                                       </button>
                                    </li>
                                    <li className="nav-item ms-auto">
                                       <button className="nav-link btn btn-light text-dark ms-4 mx-2" onClick={handleProfile} style={{ backgroundColor: 'rgb(221, 233, 243)' }}>Your Profile</button>
                                    </li>
                                    <li className="nav-item ms-auto">
                                       <button className="nav-link btn btn-light text-dark ms-4 mx-2" onClick={handleLogout} style={{ backgroundColor: 'rgb(221, 233, 243)' }}>
                                          {loading ? <Loading /> : 'Logout'}
                                       </button>
                                    </li>
                                 </>
                                 : ""
                           }
                           {/* <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to='/' role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown link
                                </Link>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to='/'>Action</Link></li>
                                    <li><Link className="dropdown-item" to='/'>Another action</Link></li>
                                    <li><Link className="dropdown-item" to='/'>Something else here</Link></li>
                                </ul>
                            </li> */}
                        </ul>
                     </div>
                  </div>
               </nav>
               : <Loading />
         }
      </div>
   )
}
