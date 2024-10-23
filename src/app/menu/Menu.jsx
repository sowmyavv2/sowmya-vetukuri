import React from 'react'; // Make sure to import React
import './style.css';

let menuItems = ["Recent Experience", "Projects", "Work"];

const Menu = () => {
  return (
    <div className='menu'>
      {menuItems.map((x, index) => {
        debugger; // This will pause execution when the DevTools are open
        return (
          <div className="list" key={index}>          <a href="#" className='menu-link'>
{x}</a>
          </div>
        );
      })}
    </div>
  );
};

export default Menu;