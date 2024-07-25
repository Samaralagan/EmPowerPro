import React from "react";
import "./Attendance.css";
import Header from "../layout/Header";
import { FaHourglassStart } from "react-icons/fa6";
import { FaHourglassHalf } from "react-icons/fa6";
import { FaClock } from "react-icons/fa6";
import { FaSun } from "react-icons/fa6";
import LineChart from "./LineChart";

function Attendance() {
  return (
    <div>
      <Header />
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
            <div className="text-row">
              <div className="first-word">Check In</div>
              <div className="second-word">09:00 AM</div>
            </div>
            <div className="progress-line">
              <div className="progress-bar"></div>
            </div>

            <div className="button-row">
              <button className="custom-button">Day Break</button>
              <button className="custom-button">Checkout</button>
            </div>
          </div>

          <div className="additional-rectangle-2">
            <LineChart />
          </div>
        </div>

        <div className="additional-rectangle-3">
          <div className="attendance-records-text">Attendance Records</div>

          <div className="dropdown-row">
            <select className="attendance-custom-dropdown" defaultValue="">
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
            </select>

            <button className="attendance-search-button">Search</button>
          </div>

          <div className="custom-table-container">
            <table className="custom-table">
              <thead>
                <tr>
                  <th></th>
                  <th>Check In</th>
                  <th>Check Out</th>
                  <th>Worked Hours</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>18th March 2024</td>
                  <td>09:00 AM</td>
                  <td>05:00 PM</td>
                  <td>08:00</td>
                  <td>
                    <button className="ontime"> On Time </button>
                  </td>
                </tr>
                <tr>
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
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Attendance;
