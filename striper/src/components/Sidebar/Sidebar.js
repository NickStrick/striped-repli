import React from 'react';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className="Sidebar">
      <div className={`side-section side-head`}>
          <h2 className='side-header'>STRIPED</h2>
      </div>
      <div className={`side-section`}></div>
      <div className={`side-section`}></div>
      <div className={`side-section`}></div>
      <div className={`side-section`}></div>
      <div className={`side-section`}></div>
    </div>
  );
}

export default Sidebar;