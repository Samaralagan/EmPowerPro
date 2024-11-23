import React, { useState , useEffect  } from 'react';
import './Performance.css';
import { IoMdArrowRoundBack } from "react-icons/io";
import { useLocation, useNavigate } from 'react-router-dom';
import { performanceEvaluationCardData } from '../constants/temporary';
import PerformanceShareRemarks from './PerformanceShareRemarks';
import PerformanceLastReport from './PerformanceLastReport';
import { Switch, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  switchBase: {
    color: "#B9B5B5", // Default color
    "&$checked": {
      color: "#000F44", // Color when checked
    },
    "&$checked + $track": {
      backgroundColor: "#000F44", // Track color when checked
    },
  },
  checked: {},
  track: {},
});

const Performance = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalIsOpen1, setModalIsOpen1] = useState(false);
  const [isRemarkEnabled, setIsRemarkEnabled] = useState(true); 
  const classes = useStyles();

  useEffect(() => {
    const savedState = localStorage.getItem("isRemarkEnabled");
    if (savedState !== null) {
      setIsRemarkEnabled(JSON.parse(savedState));
    }
  }, []);

  const handleSwitchChange = (event) => {
    const isChecked = event.target.checked;
    setIsRemarkEnabled(isChecked);
    localStorage.setItem("isRemarkEnabled", JSON.stringify(isChecked));
  };

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const openModal1 = () => {
    setModalIsOpen1(true);
  };

  const closeModal1 = () => {
    setModalIsOpen1(false);
  };

  const handlePage = (PageName) => {
    navigate(`/${PageName}`);
  };

  const getActivePageName = () => {
    const pathname = decodeURIComponent(location.pathname);
    const role = pathname.split('/')[2];
    return role;
  };

  const activePageName = getActivePageName();

 

  return (
    <div className="performance-body">
      <div className="performance-back">
        <IoMdArrowRoundBack onClick={() => handlePage(`Dash Board/${activePageName}`)} />
      </div>
      <div className="performance-top">
        <div>My Performance Evaluation</div>
        <button onClick={openModal1}>View Last Report</button>
      </div>

      <PerformanceLastReport modalIsOpen1={modalIsOpen1} closeModal1={closeModal1} />

      {/* Toggle switch for HR */}
      {activePageName === 'HR' && (
        <div className="toggle-remarks">
          <span className="toggle-title">Enable Sharing Remarks</span>
          <Switch
            checked={isRemarkEnabled}
            onChange={handleSwitchChange}
            classes={{
              switchBase: classes.switchBase,
              checked: classes.checked,
              track: classes.track,
            }}
          />
        </div>
      )}

      {/* Conditionally render content for everyone */}
      {isRemarkEnabled && (
        <div className="performance-content">
          <h3 className="performance-content-title">Performance Evaluation on Others</h3>
          <div className="performance-content-boxs">
            {performanceEvaluationCardData.map((card, index) => (
              <div className="performance-content-box" key={index}>
                <img src={card.img} alt="" />
                <p>{card.name}</p>
                <span>{card.position}</span>
                <button onClick={openModal}>Share Remarks</button>
              </div>
            ))}
            <PerformanceShareRemarks modalIsOpen={modalIsOpen} closeModal={closeModal} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Performance;
