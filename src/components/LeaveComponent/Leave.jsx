import React from 'react'
import './Leave.css'
import Header from '../layout/Header'
import { FaCalendarCheck } from 'react-icons/fa6'
import { FaCalendarTimes } from 'react-icons/fa'
import { FaBookmark } from 'react-icons/fa6'
import { FaPlusCircle } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'


import Dropdown from 'react-bootstrap/Dropdown';



function Leave() {
    const navigate = useNavigate();

    const handleApplyLeaveClick = () => {
        navigate('/Apply-leave');
    }

    return (
        <div>
            <Header />

            <div className='leave-body'>
                <div className="rectangles_container">

                    <div className="main_rectangles">
                        <div className='rectangles rectangle_2'>
                            <div className='small_square'>
                                <FaBookmark className='icons' />
                            </div>

                            <div className='box_content'>
                                <div className='main_box_content'> 25 </div>
                                <div className='sub_box_content'> Available Leaves </div>
                            </div>
                        </div>

                        <div className='rectangles rectangle_3'>
                            <div className='small_square'>
                                <FaCalendarCheck className='icons' />
                            </div>
                            <div className='box_content'>
                                <div className='main_box_content'>10 </div>
                                <div className='sub_box_content'> Approved Leaves </div>
                            </div>
                        </div>

                        <div className='rectangles rectangle_4'>
                            <div className='small_square'>
                                <FaCalendarTimes className='icons' />
                            </div>
                            <div className='box_content'>
                                <div className='main_box_content'> 5 </div>
                                <div className='sub_box_content'> Rejected Leaves  </div>
                            </div>

                        </div>



                    </div>



                    <div className='apply-leave' onClick={handleApplyLeaveClick}>
                        <div className='add-icon-circle'>
                            <FaPlusCircle className='add-icon' />
                        </div>
                        <div className='button-content'>
                            <div className='apply-leave-content'>Apply Leave</div>
                        </div>
                    </div>

                </div>


                <div className='additional-rectangle-3'>
                    <div className="attendance-records-text">Leaves</div>

                    <div className="dropdown-row">

                        {/* <select className="custom-dropdown" defaultValue="">
                            <option value="" disabled>Last 6 months</option>
                            <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                        </select>

                        <select className="custom-dropdown" defaultValue="">
                            <option value="" disabled>Status</option>
                            <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                        </select> */}

                        <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic" className='custom-dropdown'>
                               Last 6 months
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>

                        <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic" className='custom-dropdown'>
                               Status
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>




                        <button className="search-button">Search</button>

                    </div>


                    <div className="custom-table-container">
                        <table className="custom-table">
                            <thead>
                                <tr>
                                    <th>Leave No.</th>
                                    <th>Leave Type</th>
                                    <th>Start Date</th>
                                    <th>End Date</th>
                                    <th>Reason</th>
                                    <th>Status</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td>01</td>
                                    <td>Casual</td>
                                    <td>14th March 2024</td>
                                    <td>16th March 2024</td>
                                    <td>Friend’s wedding function</td>
                                    <td><button className="ontime"> Approved </button></td>
                                </tr>
                                <tr>
                                    <td>02</td>
                                    <td>Casual</td>
                                    <td>21st April 2024</td>
                                    <td>22th April 2024</td>
                                    <td>Arms' Giving function</td>
                                    <td><button className="late"> Pending </button></td>
                                </tr>
                                <tr>
                                    <td>03</td>
                                    <td>Medical</td>
                                    <td>17th June 2024</td>
                                    <td>19th June 2024</td>
                                    <td>Hospitalization</td>
                                    <td><button className="absent"> Rejected</button></td>

                                </tr>
                                <tr>
                                    <td>04</td>
                                    <td>Casual</td>
                                    <td>28th June 2024</td>
                                    <td>2nd July 2024</td>
                                    <td> Planned time off for rest</td>
                                    <td><button className="ontime"> Approved</button></td>
                                </tr>
                                <tr>
                                    <td>05</td>
                                    <td>Medical</td>
                                    <td>28th July 2024</td>
                                    <td>29th July 2024</td>
                                    <td> Personal illness</td>
                                    <td><button className="ontime"> Approved </button></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>




            </div>
        </div>
    )
}

export default Leave
