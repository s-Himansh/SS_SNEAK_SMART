import React from 'react';
import NavBar from './NavBar';
import { Link } from 'react-router-dom';
// import './landingPage.css';
import CircleCompo from '../component/circle/CircleCompo';

import FancyCarousel from 'react-fancy-circular-carousel';
import 'react-fancy-circular-carousel/FancyCarousel.css';

export default function LandingPage() {
  return (
    <div>
      <NavBar />
      {/* <div className="container mt-4 mb-4">
        <div className="row">
          <div className="col-lg-4 mb-4">
            <div className="card" style={{background: 'linear-gradient(45deg, #3498db, #8e44ad)',border: 'none',borderRadius: '10px',boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',color: 'white'}}>
              <div className="card-body">
                <p className="card-text">
                  <b className='text-dark'>Lorem</b> : ipsum dolor, sit amet consectetur adipisicing elit.
                  Impedit voluptatum officiis quo repellat perspiciatis?
                  Veritatis consectetur assumenda eveniet molestias nam perferendis
                  alias id quibusdam nisi, laudantium, tempore earum minus? Ab sed
                  facere quis asperiores. Adipisci minima velit perspiciatis sint sed!
                </p>
              </div>
            </div>
          </div>

          
          <div className="col-lg-4 mb-4">
            <div className="card" style={{background: 'linear-gradient(45deg, #3498db, #8e44ad)', backgroundColor: '#f8f9fa', border: '1px solid #dee2e6', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',color: 'white' }}>
              <div className="card-body">
                <p className="card-text">
                  <b className='text-dark'>Lorem</b> : ipsum dolor, sit amet consectetur adipisicing elit.
                  Impedit voluptatum officiis quo repellat perspiciatis?
                  Veritatis consectetur assumenda eveniet molestias nam perferendis
                  alias id quibusdam nisi, laudantium, tempore earum minus? Ab sed
                  facere quis asperiores. Adipisci minima velit perspiciatis sint sed!
                </p>
              </div>
            </div>
          </div>

          
          <div className="col-lg-4 mb-4">
            <div className="card" style={{background: 'linear-gradient(45deg, #3498db, #8e44ad)', backgroundColor: '#f8f9fa', border: '1px solid #dee2e6', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',color: 'white' }}>
              <div className="card-body">
                <p className="card-text">
                  <b className='text-dark'>Lorem</b> : ipsum dolor, sit amet consectetur adipisicing elit.
                  Impedit voluptatum officiis quo repellat perspiciatis?
                  Veritatis consectetur assumenda eveniet molestias nam perferendis
                  alias id quibusdam nisi, laudantium, tempore earum minus? Ab sed
                  facere quis asperiores. Adipisci minima velit perspiciatis sint sed!
                </p>
              </div>
            </div>
          </div>

          
          <div className="col-lg-4 mb-4">
            <div className="card" style={{background: 'linear-gradient(45deg, #3498db, #8e44ad)', backgroundColor: '#f8f9fa', border: '1px solid #dee2e6', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',color: 'white' }}>
              <div className="card-body">
                <p className="card-text">
                  <b className='text-dark'>Lorem</b> : ipsum dolor, sit amet consectetur adipisicing elit.
                  Impedit voluptatum officiis quo repellat perspiciatis?
                  Veritatis consectetur assumenda eveniet molestias nam perferendis
                  alias id quibusdam nisi, laudantium, tempore earum minus? Ab sed
                  facere quis asperiores. Adipisci minima velit perspiciatis sint sed!
                </p>
              </div>
            </div>
            <div className="card mt-4" style={{background: 'linear-gradient(45deg, #3498db, #8e44ad)', backgroundColor: '#f8f9fa', border: '1px solid #dee2e6', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',color: 'white' }}>
              <div className="card-body">
                <p className="card-text">
                  <b className='text-dark'>Lorem</b> : ipsum dolor, sit amet consectetur adipisicing elit.
                  Impedit voluptatum officiis quo repellat perspiciatis?
                  Veritatis consectetur assumenda eveniet molestias nam perferendis
                  alias id quibusdam nisi, laudantium, tempore earum minus? Ab sed
                  facere quis asperiores. Adipisci minima velit perspiciatis sint sed!
                </p>
              </div>
            </div>
          </div>

          
          <div className="col-lg-4 mb-4 card-container">
            <div className='mb-5 circular-animation-content' style={{ paddingTop: '5.7px' }}>
              <h2 className="text-center mb-4 mt-5">
                Welcome to <span style={{ color: "#00203FFF" }}>SNEAK</span> <span style={{ color: "green" }}>SMART</span>
              </h2>

              <Link to='/signup' className='mb-5'>
                <div className="text-center mb-5">
                  <button className="btn btn-success text-white">Register now to start</button>
                </div>
              </Link>

            </div>

            <div className="card mt-3" style={{background: 'linear-gradient(45deg, #3498db, #8e44ad)', backgroundColor: '#f8f9fa', border: '1px solid #dee2e6', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',color: 'white' }}>
              <div className="card-body">
                <p className="card-text">
                  <b className='text-dark'>Lorem</b> : ipsum dolor, sit amet consectetur adipisicing elit.
                  Impedit voluptatum officiis quo repellat perspiciatis?
                  Veritatis consectetur assumenda eveniet molestias nam perferendis
                  alias id quibusdam nisi, laudantium, tempore earum minus? Ab sed
                  facere quis asperiores. Adipisci minima velit perspiciatis sint sed!
                </p>
              </div>
            </div>
          </div>

          
          <div className="col-lg-4 mb-4" >
            <div className="card" style={{background: 'linear-gradient(45deg, #3498db, #8e44ad)', backgroundColor: '#f8f9fa', border: '1px solid #dee2e6', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',color: 'white' }}>
              <div className="card-body">
                <p className="card-text">
                  <b className='text-dark'>Lorem</b> : ipsum dolor, sit amet consectetur adipisicing elit.
                  Impedit voluptatum officiis quo repellat perspiciatis?
                  Veritatis consectetur assumenda eveniet molestias nam perferendis
                  alias id quibusdam nisi, laudantium, tempore earum minus? Ab sed
                  facere quis asperiores. Adipisci minima velit perspiciatis sint sed!
                </p>
              </div>
            </div>
            <div className="card mt-4" style={{background: 'linear-gradient(45deg, #3498db, #8e44ad)', backgroundColor: '#f8f9fa', border: '1px solid #dee2e6', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',color: 'white' }}>
              <div className="card-body">
                <p className="card-text">
                  <b className='text-dark'>Lorem</b> : ipsum dolor, sit amet consectetur adipisicing elit.
                  Impedit voluptatum officiis quo repellat perspiciatis?
                  Veritatis consectetur assumenda eveniet molestias nam perferendis
                  alias id quibusdam nisi, laudantium, tempore earum minus? Ab sed
                  facere quis asperiores. Adipisci minima velit perspiciatis sint sed!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div> */}
       <CircleCompo />

       <footer>This is footer component</footer>
    </div >
  );
}
