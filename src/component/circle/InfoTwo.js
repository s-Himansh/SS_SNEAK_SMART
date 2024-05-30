import React from 'react';
import { Link } from 'react-router-dom';
export default function InfoTwo() {
    return (
        <div className="row">
            <div className="card" style={{ 
                background: 'linear-gradient(45deg, #158c43, #023616)', 
                borderRadius: '10px', 
                boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)', 
                color: 'white',
                width: '100%'  // Set a fixed width
            }}>
                <div className="card-body">
                    <h5 className="card-title">Practice and revise</h5>
                    <p className="card-text mb-5">
                    Learning isn't just limited to classes with our practice section, mock tests and lecture notes shared as PDFs for your revision
                    </p>

                    <Link to='/signup' className='mb-5'>
                    <div className="text-center">
                        <button className="btn btn-dark text-white">Register now to start</button>
                    </div>
                </Link>
                </div>
            </div>

            
            {/* <div className='mb-5 circular-animation-content ' style={{top : '30px'}}>
                <h2 className="text-center mb-4 mt-5">
                    Welcome to <span style={{ color: "#00203FFF" }}>SNEAK</span> <span style={{ color: "green" }}>SMART</span>
                </h2>

                <Link to='/signup' className='mb-5'>
                    <div className="text-center mb-5">
                        <button className="btn btn-success text-white">Register now to start</button>
                    </div>
                </Link>
            </div> */}
        </div>
    );
}
