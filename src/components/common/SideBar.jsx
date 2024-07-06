import React from 'react';
import './SideBar.css';
import { EmployeeSidebar } from '../constants/contents';
import logo from '../../assets/images/logo.png';
import { useNavigate, useLocation } from 'react-router-dom';

const SideBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  

  const handlePage = (PageName) => {
    navigate(`/${PageName}`);
  };

  const getActivePageName = () => {
    const pathname = decodeURIComponent(location.pathname); // Decode the URL
    const mainPath = pathname.split('/')[1]; // Get the first part of the path
    return mainPath;
  };

  const activePageName = getActivePageName();

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
          >
            {<sidebar.icon className='side-bar-link-icon' />}
            <p className='side-bar-link-text'>{sidebar.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
