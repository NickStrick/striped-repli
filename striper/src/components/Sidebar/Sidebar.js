import React from 'react';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className="Sidebar">
      <div className={`side-section side-head`}>
          <h2 className='side-header'>STRIPED</h2>
      </div>
      <div className={`side-section side-nav`}>
        <nav>
          <div className='nav-section'>
          <a href='#' className='active'>Latest Post</a>
          </div>
          <div className='nav-section'>
            <a href='#'>Archives</a>
          </div>
          <div className='nav-section'> 
            <a href='#'>About Me</a>
          </div>
          <div className='nav-section contacts'>
            <a href='#'>Contact Me</a>
          </div>
          
        </nav>
      </div>
      {/* <div className={`side-section`}></div>
      <div className={`side-section`}></div>
      <div className={`side-section`}></div>
      <div className={`side-section`}></div> */}
    </div>
  );
}

export default Sidebar;