import React, { useState, useEffect } from 'react';
import myImage from './user.png';
import { useNavigate } from 'react-router-dom';
import Loading from '../component/Loading';

export default function UserProfile() {
   const navigate = useNavigate();

   const userId = localStorage.getItem('userId');
   const [userProfile, setUserProfile] = useState({
      name: '',
      email: '',
      nickname: '',
      age: '',
      description: '',
   });

   const [editableProfile, setEditableProfile] = useState({
      name: '',
      email: '',
      password: '',
      nickname: '',
      age: '',
      description: '',
   });

   const [isEditing, setIsEditing] = useState(false);

   useEffect(() => {
      const fetchData = async () => {
         try {
            const response = await fetch('http://localhost:5000/lms/userdata', {
               method: 'GET',
               headers: {
                  'Content-Type': 'application/json',
                  'Authorization': `Bearer ${userId}`,
               },
            });

            if (!response.ok) {
               throw new Error('Failed to fetch user data');
            }

            const data = await response.json();
            const userData = data.userData;

            setUserProfile({
               name: userData.name,
               email: userData.email,
               nickname: userData.nickname,
               age: userData.age,
               description: userData.description,
            });
         } catch (error) {
            console.error('Error fetching user data:', error.message);
         }
      };

      fetchData();
   }, [userId]);

   const handleEdit = () => {
      setEditableProfile({ ...userProfile });
      setIsEditing(true);
   };

   const handleUpdate = () => {
      fetch('http://localhost:5000/lms/updateProfile', {
         method: 'PUT',
         headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${userId}`,
         },
         body: JSON.stringify(editableProfile),
      })
         .then(response => response.ok ? response.json() : Promise.reject('Failed to update profile'))
         .then(data => {
            console.log('Profile updated successfully:', data);
            setUserProfile(editableProfile);
            setIsEditing(false);
         })
         .catch(error => console.error('Error updating profile:', error.message));
   };

   const [loading, setLoadingStatus] = useState(false);
   const handleBack = () => {
      setLoadingStatus(true);

      setTimeout(() => {
         setLoadingStatus(false);
         navigate('/home');
      }, 2000);
   };


   return (
      <div className="row">
         {
            !loading ?
               <div className="row overflow-hidden">
                  <div className="col-lg-6 d-flex">
                     <button type="button" className="btn btn-outline-light btn-sm position-absolute top-0 start-0 mt-2 ms-2" onClick={handleBack}>
                        ← Back
                     </button>
                     <div className="container d-flex flex-column align-items-center justify-content-center vh-100 bg-dark">
                        <div className="mx-auto w-70">
                           <hr className="bg-white" />
                           <h1 className="text-center mb-4 text-white">User Profile</h1>

                           <div className="input-group mb-3">
                              <span className="input-group-text" id="basic-addon1">
                                 #
                              </span>
                              <input type="text" className="form-control border-4" placeholder="Full Name" aria-label="Username" aria-describedby="basic-addon1" name="name" value={isEditing ? editableProfile.name : userProfile.name} disabled={!isEditing}
                                 onChange={(e) =>
                                    setEditableProfile({
                                       ...editableProfile,
                                       name: e.target.value,
                                    })
                                 }
                              />
                           </div>

                           <div className="input-group mb-3">
                              <input type="text" className="form-control border-4" placeholder="Email" aria-label="Recipient's username" aria-describedby="basic-addon2" name="email" value={isEditing ? editableProfile.email : userProfile.email} disabled={!isEditing}
                                 onChange={(e) =>
                                    setEditableProfile({ ...editableProfile, email: e.target.value })
                                 }
                              />
                              <span className="input-group-text" id="basic-addon2">
                                 abc@gmail.com
                              </span>
                           </div>

                           <div className="input-group mb-3">
                              <span className="input-group-text">σ</span>
                              <input type="password" className="form-control border-4" aria-label="Amount (to the nearest dollar)" placeholder="Password" name="password" value={isEditing ? editableProfile.password : '********'} disabled={!isEditing}
                                 onChange={(e) =>
                                    setEditableProfile({ ...editableProfile, password: e.target.value })
                                 }
                              />
                              <span className="input-group-text">/</span>
                           </div>

                           <div className="input-group mb-3">
                              <input type="text" className="form-control border-4" placeholder="Username" aria-label="Username" name="nickname" value={isEditing ? editableProfile.nickname : userProfile.nickname} disabled={!isEditing}
                                 onChange={(e) =>
                                    setEditableProfile({ ...editableProfile, nickname: e.target.value })
                                 }
                              />
                              <span className="input-group-text">@</span>
                              <input type="text" className="form-control border-4" placeholder="Age" aria-label="Server" name="age" value={isEditing ? editableProfile.age : userProfile.age} disabled={!isEditing}
                                 onChange={(e) =>
                                    setEditableProfile({ ...editableProfile, age: e.target.value })
                                 }
                              />
                           </div>

                           <div className="input-group mb-3">
                              <span className="input-group-text">About me</span>
                              <textarea className="form-control border-4" aria-label="With textarea" name="description" value={isEditing ? editableProfile.description : userProfile.description} disabled={!isEditing}
                                 onChange={(e) =>
                                    setEditableProfile({ ...editableProfile, description: e.target.value })
                                 }
                              ></textarea>
                           </div>

                           <div className="d-grid gap-2">
                              {isEditing ? (
                                 <button
                                    type="button"
                                    className="btn btn-primary mb-3"
                                    onClick={handleUpdate}
                                 >
                                    Update Profile
                                 </button>
                              ) : (
                                 <button
                                    type="button"
                                    className="btn btn-secondary mb-3"
                                    onClick={handleEdit}
                                 >
                                    Edit Profile
                                 </button>
                              )}
                           </div>
                           <hr className="bg-white mt-5" />
                        </div>
                     </div>
                  </div>

                  <div className="col-lg-6">
                     <img src={myImage} alt="UserProfile" className="img-fluid" />
                  </div>
               </div>
               : <Loading />
         }
      </div>
   );
}
