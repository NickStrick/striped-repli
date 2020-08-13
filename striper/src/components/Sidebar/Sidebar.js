import React from 'react';
import './Sidebar.css';
import Search from './Search/Search.js';
import Recentposts from './Recentposts/Recentposts.js';

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

      <Search />

      <div className={`side-section side-info`}>
        <div className={'info'}>
          <p><span>Striped:</span> A free and fully responsive HTML5 site template designed by AJ developed by Nick</p>
        </div>
      </div>

      <div className={`side-section side-posts`}>
        <Recentposts />
      </div>
      
      {/* <div className={`side-section`}></div>
      <div className={`side-section`}></div>
      <div className={`side-section`}></div>
      <div className={`side-section`}></div> */}
    </div>
  );
}

export default Sidebar;