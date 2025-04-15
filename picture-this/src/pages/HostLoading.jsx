import React from 'react';
import '../css/other-pages.css';

const HostLoading = () => {
  return (
    <div>
      <br />
      <br />
      <br />
      <br />

      <div className="container">
        <div className="d-flex justify-content-center">
          <div className="spinner-border text-dark" style={{ width: '7rem', height: '7rem' }} role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      </div>

      <div className="loader text-center">
        <h1>Waiting for Players</h1>
      </div>

      <br />
      <br />
      <br />

      
    </div>
  );
};

export default HostLoading;