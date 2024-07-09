import React, { useState } from 'react';
import './SideBar.css';
import { EmployeeSidebar } from '../constants/contents';
import logo from '../../assets/images/logo.png';
import { useNavigate, useLocation } from 'react-router-dom';

const SideBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [showSubLinks, setShowSubLinks] = useState(false);

  const handlePage = (PageName) => {
    navigate(`/${PageName}`);
  };

  const getActivePageName = () => {
    const pathname = decodeURIComponent(location.pathname); // Decode the URL
    const mainPath = pathname.split('/')[1]; // Get the first part of the path
    return mainPath;
  };

  const activePageName = getActivePageName();

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
            className={`side-bar-link ${activePageName === sidebar.name ? 'active' : ''}`}
            onClick={() => handlePage(sidebar.name)}
            onMouseEnter={() => sidebar.name === 'Attendance' && toggleSubLinks()}
            onMouseLeave={() => sidebar.name === 'Attendance' && toggleSubLinks()}
          >
            {<sidebar.icon className='side-bar-link-icon' />}
            <p className='side-bar-link-text'>{sidebar.name}</p>
            {sidebar.name === 'Attendance' && showSubLinks && (
              <div className='attendance-options'>
                <div className='side-bar-sub-link'>Attendance</div>
                <div className='side-bar-sub-link'>Leaves</div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
