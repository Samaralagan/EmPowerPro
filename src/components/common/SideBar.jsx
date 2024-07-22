import React, { useState } from 'react';
import './SideBar.css';
import { EmployeeSidebar,TeamLeaderSidebar,AdminSidebar, HRSidebar, FinanceAndSupportSidebar, ExecutiveSidebar} from '../constants/contents';
import logo from '../../assets/images/logo.png';
import { useNavigate } from 'react-router-dom';

const SideBar = () => {
  const navigate = useNavigate();
  const [showSubLinks, setShowSubLinks] = useState(false);

  const handlePage = (PageName) => {
    navigate(`/${PageName}`);
  };

  var role = ''
  var sidebars = []
  const getActivePageName = () => {
    const pathname = decodeURIComponent(location.pathname); // Decode the URL
    const mainPath = pathname.split('/')[1]; // Get the first part of the path
     role = pathname.split('/')[2];
    return mainPath;
  };
  

  const activePageName = getActivePageName();
 
  if(role === 'Employee'){
    sidebars= EmployeeSidebar
  }else if (role === 'TeamLeader') {
     sidebars= TeamLeaderSidebar
  }else if (role === 'Admin') {
    sidebars= AdminSidebar
  }else if (role === 'HR') {
    sidebars= HRSidebar
  }else if (role === 'FinanceAndSupport') {
    sidebars= FinanceAndSupportSidebar
  }else if (role === 'Executive') {
    sidebars= ExecutiveSidebar
  }

  return (
    <div className='side-bar'>
      <div className='side-bar-logo'>
        <img src={logo} alt="" />
      </div>
      <div className='side-bar-links'>
        {sidebars.map((sidebar, index) => (
          <div
            key={index}
            className={`side-bar-link ${activePageName === sidebar.name ? 'active' : ''}`}
            onClick={() => handlePage(`${sidebar.name}/${role}`)}
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
