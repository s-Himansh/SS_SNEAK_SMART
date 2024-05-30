import React from 'react';
import pricingImage from '../assets/signup.png';
import { Link } from 'react-router-dom';

export default function Pricing() {
  return (
    <div className="row overflow-hidden">
      <div className="col-lg-6 d-flex">
        <Link to='/' type="button" className="btn btn-outline-light btn-sm position-absolute top-0 start-0 mt-2 ms-2">
          ← Back
        </Link>
        <div className="container d-flex flex-column align-items-center justify-content-center vh-100 bg-dark">
          <div className="mx-auto w-70">
            <hr className="bg-white" />
            <h1 className="text-center mb-4 text-white">Pricing Plans</h1>

            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">
                Plan Name
              </span>
              <input type="text" className="form-control border-4" placeholder="Free Plan" aria-label="Plan Name" aria-describedby="basic-addon1" disabled />
            </div>

            <div className="input-group mb-3">
              <input type="text" className="form-control border-4" placeholder="Price" aria-label="Price" value="0" disabled />
              <span className="input-group-text">$</span>
            </div>

            <div className="input-group mb-3">
              <span className="input-group-text">Features</span>
              <textarea className="form-control border-4" aria-label="With textarea" value="All Features Included" disabled></textarea>
            </div>

            <div className="input-group mb-3">
              <span className="input-group-text">Validity</span>
              <input type="text" className="form-control border-4" placeholder="Unlimited" aria-label="Validity" disabled />
              <span className="input-group-text">Days</span>
            </div>

            <div className="d-grid gap-2">
              <Link to='/' type="button" className="btn btn-secondary mb-3">
                Back to Home
              </Link>
            </div>

            <hr className="bg-white mt-5" />
          </div>
        </div>
      </div>

      <div className="col-lg-6">
        <img src={pricingImage} alt="Pricing" className="img-fluid"  />
      </div>
    </div>
  );
}
