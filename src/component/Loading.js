import React from 'react';

export default function Loading() {
  return (
    <div className="d-flex align-items-center justify-content-center min-vh-100">
      <div className="spinner-border text-dark fw-bold" role="status" style={{ width: '5rem', height: '5rem',  borderWidth: '0.5em' }}>
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}
