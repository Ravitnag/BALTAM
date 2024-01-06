import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

import Menu from './Menu'
import { Outlet } from 'react-router-dom';


function App() {



  return (
    <div className="App">
  

        <div id="main" className='main'>
        <nav>
        <div className='sign-in'>
          <span className='sign-in-span'>
            להתחברות \ הרשמה
          </span>
        </div>
      </nav>
          <Menu />
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <Outlet />
        </div>
     
  



      <footer id="footer">
        <div>
          כל הזכויות שמורות לרוית
        </div>
      </footer>
    </div>
  );
}

export default App;
