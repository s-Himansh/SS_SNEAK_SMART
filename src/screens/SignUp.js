import React, { useState } from 'react';
import myImage from '../screens/signup.png';
import { Link, useNavigate } from 'react-router-dom';

export default function SignUp() {

   const [newUser, setNewUser] = useState({ name: "", email: "", password: "", nickname: "", age: '', description: "" });

   let navigate = useNavigate();
   const handleSubmit = async (event) => {
      event.preventDefault();

      const response = await fetch("http://localhost:5000/lms/signup", { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ name: newUser.name, email: newUser.email, password: newUser.password, nickname: newUser.nickname, age: newUser.age, description: newUser.description }) });
      const jsonData = await response.json();
      if (!jsonData.success) {
         alert('Please enter valid values in the field');
      } else {
         navigate('/login');
      }
   }

   const changeValue = (event) => {
      setNewUser({ ...newUser, [event.target.name]: event.target.value });
   }


   return (
      <div className='container-fluid'>
         <div className='row'>
            {/* Left side (Image) */}
            <div className='col-lg-6 d-none d-lg-block mt-2'>
               <img
                  src={myImage}
                  alt='Left Side Image'
                  className='img-fluid h-100'
               />
            </div>
            {/* Right side (Sign Up Form) */}
            <div className='col-lg-6'>
               <div className="container d-flex flex-column align-items-center justify-content-center vh-100 bg-dark">
                  <div className="mx-auto w-70">
                     <hr className='bg-white' />
                     <form onSubmit={handleSubmit}>
                        <h1 className="text-center mb-4 text-white">Sign Up</h1>
                        <div className="input-group mb-3">
                           <span className="input-group-text" id="basic-addon1">#</span>
                           <input type="text" className="form-control border-4" placeholder="Full Name" aria-label="Username" aria-describedby="basic-addon1" name='name' value={newUser.name} onChange={changeValue} />
                        </div>

                        <div className="input-group mb-3">
                           <input type="text" className="form-control border-4" placeholder="Email" aria-label="Recipient's username" aria-describedby="basic-addon2" name='email' value={newUser.email} onChange={changeValue} />
                           <span className="input-group-text" id="basic-addon2">abc@gmail.com</span>
                        </div>

                        <div className="input-group mb-3">
                           <span className="input-group-text">σ</span>
                           <input type="password" className="form-control border-4" aria-label="Amount (to the nearest dollar)" placeholder='Password' name='password' value={newUser.password} onChange={changeValue} />
                           <span className="input-group-text">/</span>
                        </div>

                        <div className="input-group mb-3">
                           <input type="text" className="form-control border-4" placeholder="Username" aria-label="Username" name='nickname' value={newUser.nickname} onChange={changeValue} />
                           <span className="input-group-text">@</span>
                           <input type="text" className="form-control border-4" placeholder="Age" aria-label="Server" name='age' value={newUser.age} onChange={changeValue} />
                        </div>

                        <div className="input-group mb-3">
                           <span className="input-group-text">About me</span>
                           <textarea className="form-control border-4" aria-label="With textarea" name='description' value={newUser.description} onChange={changeValue}></textarea>
                        </div>
                        <div className="d-grid gap-2">
                           <button type="submit" className="btn btn-primary mb-3" style={{ background: 'linear-gradient(45deg, #158c43, #023616)', border : 'none'}}>Sign Up</button>
                           <Link to="/login" className="btn btn-outline-light btn-hover-red">Already a User ?</Link>
                        </div>
                     </form>
                     <hr className='bg-white mt-5' />
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
