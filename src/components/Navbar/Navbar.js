import React, { useState, useEffect } from 'react';
import './Navbar.css';
import restaurantData from '../../restaurantData'; // Import restaurant data
import axios from 'axios';

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        const response = await axios.get('http://localhost:5000/menuItems');
        setMenuItems(response.data);
      } catch (error) {
        console.error('Error fetching menu items:', error);
      }
    };

    fetchMenuItems();
  }, []);
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <h1>{restaurantData.restaurantName}</h1>
      </div>
      <div className="nav-links">
        <div className="dropdown">
          <button className="dropbtn" onClick={toggleDropdown}>Menu</button>
          {showDropdown && (
            <div className="dropdown-content">
             <ul>
              {menuItems.map((item) => (
                 <li key={item.id}>
                 <h3>{item.name}</h3>
               </li>
               
              ))}
             </ul>
            </div>
          )}
        </div>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;
