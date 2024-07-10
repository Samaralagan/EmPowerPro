import React, { useState } from 'react';
import './SideBar.css';
import { EmployeeSidebar } from '../constants/contents';
import logo from '../../assets/images/logo.png';
import { useNavigate } from 'react-router-dom';

const SideBar = () => {
  const navigate = useNavigate();
  const [showSubLinks, setShowSubLinks] = useState(false);

  const handlePage = (PageName) => {
    navigate(`/${PageName}`);
  };

  const toggleSubLinks = () => {
    setShowSubLinks(!showSubLinks);
  };

  return (
    <div className='side-bar'>
      <div className='side-bar-logo'>
        <img src={logo} alt="" />
      </div>
      <div className='side-bar-links'>
        {EmployeeSidebar.map((sidebar, index) => (
          <div
            key={index}
            className={`side-bar-link ${sidebar.name === 'Attendance' && showSubLinks ? 'active' : ''}`}
            onClick={() => {
              if (sidebar.name === 'Attendance') {
                toggleSubLinks(); // Toggle sublinks visibility
              } else {
                handlePage(sidebar.name); // Navigate to other pages directly
              }
            }}
          >
            {<sidebar.icon className='side-bar-link-icon' />}
            <p className='side-bar-link-text'>{sidebar.name}</p>
            {sidebar.name === 'Attendance' && showSubLinks && (
              <div className='attendance-options'>
                <div className='side-bar-sub-link' onClick={() => handlePage('Attendance')}>Attendance</div>
                <div className='side-bar-sub-link' onClick={() => handlePage('Leave')}>Leaves</div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
