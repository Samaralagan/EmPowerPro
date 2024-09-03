import React, { useEffect, useState } from 'react';
import "./PerformanceShareRemarks.css";
import Modal from 'react-modal';
import { FaClipboardList } from "react-icons/fa";
import { FaPlusCircle } from "react-icons/fa";
import { TiTick } from "react-icons/ti";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { MdOutlineError } from "react-icons/md";
import { createDateMarker, deleteCalenderMarker, getAllcalendarMarker, updateCalenderMarker } from '../../service/IncomeExpenseService';
import { useNavigate } from 'react-router-dom';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%) ',
    width: '40%',
    height: '55%',
    backgroundColor: 'white', // Modal content background
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.3)',
    zIndex: 1200,
    overflow: 'hidden',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.15)', // Dark background
    backdropFilter: 'blur(5px)', // Blur effect
    zIndex: 1200,
  },
};

const DashboardDateMark = ({ modalIsOpen, closeModal }) => {

    const [showlist,setShowlist] = useState(false);
    const id=2001; 
    const state="Not Complete"
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [event, setEvent] = useState("");
    const [markData,setMarkData] = useState([])
    const [errors, setErrors] = useState({
       date:'',
       time:'',
       event:''
    });
    const navigator = useNavigate();
    useEffect(() => {
      getAllMarker()
      if (modalIsOpen) {
        console.log("Modal is open, performing setup");
      }
      
      return () => {
        console.log("Cleanup on component unmount or when modalIsOpen changes");
      };
    }, [modalIsOpen]);

    

    function getAllMarker(){
      getAllcalendarMarker().then((response)=>{
          setMarkData(response.data);
      }).catch(error => {
          console.log(error);
      })
  }
    const validateForm=()=> {
      console.log('validateForm')
      let formValid = true;
      
      if (!date.trim()) {
        errors.date = "date is required";
        formValid = false;
      }
  
      if (!time.trim()) {
        errors.time = "time is required";
        formValid = false; 
      }
      if (!event.trim()) {
        errors.event = "Event is required";
        formValid = false;
        console.log(errors.event)
      }
  
      setErrors(errors);
      console.log(errors)
      return formValid;
    }

    const savemarker=(e)=>{
      e.preventDefault();
      if (validateForm()) {
        const eventTime=`${time}:00`
        const eventDate=date
        const MarkCalendar = {
          id,
          eventDate,
          eventTime,
          event,
          state
        };
        console.log(MarkCalendar );
        createDateMarker(MarkCalendar)
        .then((response) => {
          console.log(response.data);
          closeModal()
          navigator("/Dash Board/TeamLeader");
        })
        .catch((error) => {
          console.error(error); 
          
        });
  
      }
    }

    function removeMarker(markId){
      console.log(markId);

      deleteCalenderMarker(markId).then((response)=>{
         getAllMarker();
      }).catch(error=>{
          console.log(error);
      })
  }

  function updateMarker(data){

   if(data.state === 'complete'){
    data.state = 'not complete';
   }else{
     data.state = 'complete';
   }
   console.log(data)
      updateCalenderMarker(data.id,data).then((response)=>{
          console.log(response.data)
      }).catch(error=>{
          console.log(error);
      })
  
  }


  return (
    <div className="addblog-popup-body">
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
         <div> 
         <button className="close-button" onClick={closeModal}>
          ×
        </button>
            <div className='blogcomment-top'>
                <center>
                    <h5>SCHEDULE AN EVENT</h5>
                </center>
                <hr />
            </div>
       
           
            <button className='gradient-blue-btn mb-3' onClick={()=>{setShowlist(!showlist)}}>
                {!showlist?(
                    <span>
                      <FaClipboardList /> List
                   </span>  
                ):(
                    <span>
                    <FaPlusCircle /> Add
                 </span> 
                )}
            </button>
            {!showlist? (
            <form>
                <div className='d-flex ' style={{justifyContent:''}}>
                    <div class="mb-3" style={{position:'relative'}}>
                        <label for="exampleInputdate" class="form-label">Date</label>
                        <input type="date" class="form-control" id="exampleInputdate" aria-describedby="emailHelp" onChange={(e) => setDate(e.target.value)} />
                        {errors.date && (
                          <small style={{color:'red',position:'absolute',bottom:'-3vh'}}><MdOutlineError /> {errors.date}</small>
                        )}
                    </div>
                   
                    <div class="mb-3 ms-5" style={{position:'relative'}}>
                        <label for="exampleInputtime" class="form-label">Time</label>
                        <input type="time" class="form-control" id="exampleInputime" onChange={(e) => setTime(e.target.value)} />
                        {errors.time && (
                          <small style={{color:'red',position:'absolute',bottom:'-3vh'}}><MdOutlineError /> {errors.time}</small>
                        )}
                    </div>
                   
                </div>
                <div class="" style={{position:'relative'}}>
                    <label for="exampleInputevent" class="form-label">Event</label>
                    <input type="text" class="form-control" id="exampleInputevent"  onChange={(e) => setEvent(e.target.value)}/>
                    {errors.event && (
                      <small style={{color:'red',position:'absolute',bottom:'-3vh'}}><MdOutlineError /> {errors.event}</small>
                    )}
                </div>
              
                
                <center><button type="submit" className='blogcomment-sent mt-4' onClick={savemarker}>Submit</button></center>

                </form>

             
           ):(
            <div>
            {markData.map((data, index) => (
                <div
                  className="dashboard-content-right-bottom-event"
                  style={data.state === 'complete' ? { backgroundColor: '#dff4d0' } : {}}
                  key={index}
                >
                  <p className='mt-1'>{data.eventDate}</p>
                  <p className='mt-1'>{data.event}</p>
                  <p className='mt-1'>{data.eventTime}</p>
                  <p>
                    <span className='ps-1 pe-1 m-1 fs-6' style={{color:'Green',backgroundColor:'white',border:'solid 1px'}} onClick={()=>updateMarker(data)}><TiTick /></span>
                    {/* <span className='ps-1 pe-1 m-1 fs-6' style={{color:'orange',backgroundColor:'white',border:'solid 1px'}}><FaEdit /></span> */}
                    <span className='ps-1 pe-1 m-1 fs-6' style={{color:'Red',backgroundColor:'white',border:'solid 1px' ,cursor:'pointer'}} onClick={()=>removeMarker(data.id)}><MdDelete /></span>
                  </p>
                </div>
              ))}
              </div>
           )} 

            <div className='blogcomment-bottom mt-3'>   
            </div>
        </div>
      </Modal>    
    </div>
  );
};

export default DashboardDateMark;
