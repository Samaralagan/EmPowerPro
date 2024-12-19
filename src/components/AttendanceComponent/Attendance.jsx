import React, { useEffect, useState } from "react";
import "./Attendance.css";
import { FaHourglassStart } from "react-icons/fa6";
import { FaHourglassHalf } from "react-icons/fa6";
import { FaClock } from "react-icons/fa6";
import { FaSun } from "react-icons/fa6";
import LineChart from "./LineChart";
import { AiOutlineClose } from "react-icons/ai";

import {
  addBreakTime,
  addContinueTime,
  createAttendance,
  getAllAttendanceByUserId,
  getAttendanceById,
  getAttendanceDateRange,
  updateCheckout,
} from "../../service/Attendance";

function Attendance() {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [error, setError] = useState("");
  const [checkIn, setCheckIn] = useState(true);
  const [checkInTime, setCheckInTime] = useState();
  const [checkout, setCheckout] = useState(false);
  const [breakTime, setBreakTime] = useState(false);
  const error_image = "path/to/your/error_image.png"; // Update with actual path
  const [attendanceId, setAttendanceId] = useState(null);
  const [data, setData] = useState([]);
  const [searchData, setSearchData] = useState(true);
  const userId = localStorage.getItem("userId");

  if (startDate == "" && endDate == "") {
    // Ensure the data is fetched only if it hasn't been loaded already

    getAllAttendanceByUserId(userId)
      .then((response) => {
        setData(response.data);
        setSearchData(false);
      })
      .catch((error) => {
        console.error(error);
        setError("Failed to record attendance. Please try again.");
      });
  }

  const handleSearch = () => {
    // console.log(Searching from ${startDate} to ${endDate});
    const today = new Date(); // Get today's date without time for comparison
    today.setHours(0, 0, 0, 0); // Normalize today's date to midnight for accurate comparisons

    if (startDate === "" || endDate === "") {
      window.alert("Select Date Range");
    } else {
      const selectedStartDate = new Date(startDate);
      const selectedEndDate = new Date(endDate);

      if (selectedStartDate > today || selectedEndDate > today) {
        window.alert("Dates must be in the past.");
      } else if (selectedStartDate > selectedEndDate) {
        window.alert("Start Date must be before End Date.");
      } else {
        console.log("Date range is valid.");

        const datas = {
          userId: userId,
          startDate: startDate,
          endDate: endDate,
        };
        getAttendanceDateRange(datas)
          .then((response) => {
            console.log(response.data);
            setData(response.data);
          })
          .catch((error) => {
            console.error(error);
            setError("Failed to record attendance. Please try again.");
          });
      }
    }
  };

  const handleCheckInButtonClick = () => {
    if (checkIn) {
      createAttendance(userId)
        .then((response) => {
          setCheckIn(false);
          console.log(response.data);

          setAttendanceId(response.data.attendanceId);
        })
        .catch((error) => {
          console.error(error);
          setError("Failed to record attendance. Please try again.");
        });
    } else if (!checkIn && breakTime) {
      addBreakTime(attendanceId)
        .then((response) => {
          setBreakTime(false);
          console.log(response.data);
        })
        .catch((error) => {
          console.error(error);
          setError("Failed to record attendance. Please try again.");
        });
    } else if (!checkIn && !breakTime) {
      addContinueTime(attendanceId)
        .then((response) => {
          setBreakTime(true);
          console.log(response.data);
        })
        .catch((error) => {
          console.error(error);
          setError("Failed to record attendance. Please try again.");
        });
    }
  };
  const handleCheckOutButtonClick = () => {
    updateCheckout(attendanceId)
      .then((response) => {
        setCheckout(false);
        setCheckIn(true);
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
        setError("Failed to record attendance. Please try again.");
      });
  };
  // if(!checkIn){
  //   getAttendanceById(attendanceId)
  //   .then((response) => {
  //     setCheckIn(false);
  //     console.log(response.data);

  //   })
  //   .catch((error) => {
  //     console.error(error);
  //     setError("Failed to record attendance. Please try again.");
  //   });
  // }
  const calculateWorkHours = (checkIn, checkOut) => {
    const [inHours, inMinutes] = checkIn.split(":").map(Number);
    const [outHours, outMinutes] = checkOut.split(":").map(Number);

    const checkInDate = new Date(0, 0, 0, inHours, inMinutes, 0);
    const checkOutDate = new Date(0, 0, 0, outHours, outMinutes, 0);

    const diff = (checkOutDate - checkInDate) / (1000 * 60); // Difference in minutes
    const hours = Math.floor(diff / 60);
    const minutes = diff % 60;

    return `${hours}h ${minutes}m`;
  };
  return (
    <div>
      {/* <Header /> */}
      <div className="attendance-body">
        <div className="rectangles-container">
          <div className="rectangle_diff">
            <div className="sun-time">
              <FaSun className="sun-icon" />
              <div className="time-content">
                <div className="main-time-content"> 10 : 02 :09 AM</div>
                <div className="sub-time-content"> Realtime Insight</div>
              </div>
            </div>

            <div className="today-time">
              <div className="main-today-time ">Today : </div>
              <br />
              <div className="sub-today-time "> 18th March 2024</div>
            </div>
          </div>

          <div className="rectangle rectangle-2">
            <div className="small-square">
              <FaHourglassStart className="icon" />
            </div>

            <div className="box-content">
              <div className="main-box-content"> 08 : 00 </div>
              <div className="sub-box-content-1"> Working Hours </div>
            </div>
          </div>

          <div className="rectangle rectangle-3">
            <div className="small-square">
              <FaHourglassHalf className="icon" />
            </div>
            <div className="box-content">
              <div className="main-box-content"> 03 : 30 </div>
              <div className="sub-box-content-1"> Worked Hours </div>
            </div>
          </div>

          <div className="rectangle rectangle-4">
            <div className="small-square">
              <FaClock className="icon" />
            </div>
            <div className="box-content">
              <div className="main-box-content"> 02 : 00 </div>
              <div className="sub-box-content-1"> OverTime Hours </div>
            </div>
          </div>
        </div>

        <div className="second-row-rectangles">
          <div className="additional-rectangle-1">
            {!checkIn && (
              <div className="text-row">
                <div className="first-word">Check In</div>
                <div className="second-word">{data.checkIn}</div>
              </div>
            )}
            <div className="progress-line">
              <div className="progress-bar"></div>
            </div>

            <div className="button-row">
              <button
                className="custom-button"
                onClick={handleCheckInButtonClick}
              >
                {checkIn && "Check IN"}
                {breakTime && !checkIn && "Continue"}
                {!breakTime && !checkIn && "Break Time"}
              </button>
              {!checkIn && !breakTime && (
                <button
                  className="custom-button"
                  onClick={handleCheckOutButtonClick}
                >
                  Checkout
                </button>
              )}
            </div>
          </div>

          <div className="additional-rectangle-2">
            <LineChart />
          </div>
        </div>

        <div className="additional-rectangle-3">
          <div className="attendance-records-text">Attendance Records</div>

          <div className="dropdown-row">
            {/* <select className="attendance-custom-dropdown" defaultValue="">
              <option value="" disabled>
                Start date
              </option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
            <select className="attendance-custom-dropdown" defaultValue="">
              <option value="" disabled>
                End date
              </option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select> */}

            <div className="attendance-custom-dropdown">
              <label htmlFor="start-date">Start Date</label>
              <input
                type="date"
                id="start-date"
                name="start-date"
                className="attendance-date-input"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
            </div>

            <div className="attendance-custom-dropdown">
              <label htmlFor="end-date">End Date</label>
              <input
                type="date"
                id="end-date"
                name="end-date"
                className="attendance-date-input"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
              />
            </div>

            <button className="attendance-search-button" onClick={handleSearch}>
              Search
            </button>
          </div>
          {/* 
          {error && (
            <div className="exception-popup-overlay">
              <div className="exception-popup">
                <img
                  src={error_image}
                  alt="error image"
                  className="error-image"
                />
                <center className="exception-popup-topic">OOPS!</center>
                <span className="exception-error-msg">{error}</span>
                <AiOutlineClose
                  className="exception-popup-close-icon"
                  onClick={() => setError("")}
                />
              </div>
            </div>
          )} */}

          <div className="custom-table-container">
            <table className="custom-table">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Check In</th>
                  <th>Check Out</th>
                  <th>Worked Hours</th>
                  {/* <th>Status</th> */}
                </tr>
              </thead>

              <tbody>
                {data && data.length > 0 ? (
                  data.map((datas, index) => (
                    <tr key={index}>
                      <td>{datas.date}</td>
                      <td>{datas.checkIn}</td>
                      <td>{datas.checkOut}</td>
                      <td>
                        {datas.checkOut &&
                          calculateWorkHours(datas.checkIn, datas.checkOut)}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="4" style={{ textAlign: "center" }}>
                      No data available.
                    </td>
                  </tr>
                )}

                {/*<tr>
                  <td>17th March 2024</td>
                  <td>09:15 AM</td>
                  <td>05:15 PM</td>
                  <td>08:00</td>
                  <td>
                    <button className="late"> Late </button>
                  </td>
                </tr>
                <tr>
                  <td>16th March 2024</td>
                  <td>09:30 AM</td>
                  <td>05:30 PM</td>
                  <td>08:00</td>
                  <td>
                    <button className="absent"> Absent</button>
                  </td>
                </tr>
                <tr>
                  <td>15th March 2024</td>
                  <td>09:45 AM</td>
                  <td>05:45 PM</td>
                  <td>08:00</td>
                  <td>
                    <button className="ontime">On Time</button>
                  </td>
                </tr>
                <tr>
                  <td>14th March 2024</td>
                  <td>10:00 AM</td>
                  <td>06:00 PM</td>
                  <td>08:00</td>
                  <td>
                    <button className="ontime"> On Time </button>
                  </td>
                </tr> */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Attendance;
