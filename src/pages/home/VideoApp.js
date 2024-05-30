import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import myImage from '../../assets/login.png';
import { Link } from 'react-router-dom';

export default function VideoApp() {
  const [meetCode, setMeetCode] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add your logic for handling the form submission here
    navigate(`/meetroom/${meetCode}`);
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-6">
          <div className="container d-flex flex-column align-items-center justify-content-center vh-100 bg-dark">
            <div className="mx-auto w-70">
              <hr className="bg-white" />
              <form onSubmit={handleSubmit}>
                <h1 className="text-center mb-4 text-white">Join Meeting</h1>
                <div className="mb-3">
                  <label htmlFor="meetCode" className="form-label">
                    Enter Meet Code
                  </label>
                  <input type="text" value={meetCode} onChange={(e) => setMeetCode(e.target.value)} className="form-control border-4" id="meetCode" placeholder="Meet Code" />
                </div>
                <div className="d-grid gap-2">
                  <button type="submit" className="btn btn-primary mb-3" style={{ background: 'linear-gradient(45deg, #158c43, #023616)', border: 'none', }}>
                    Join Meeting
                  </button>
                </div>
              </form>
              <hr className="bg-white mt-5" />
            </div>
          </div>
        </div>

        <div className="col-lg-6 d-none d-lg-block mt-2">
          <img
            src={myImage}
            alt="Right Side Image"
            className="img-fluid h-100"
          />
        </div>
      </div>
    </div>
  );
}
