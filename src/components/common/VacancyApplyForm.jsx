import React, { useState } from 'react'
import './VacancyApplyForm.css'
import { Form, FormControl } from 'react-bootstrap'
import { FaPlus } from 'react-icons/fa'
import { BsUpload } from "react-icons/bs";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

const VacancyApplyForm = () => {
    const[education,setEducation] = useState(false)
    const[experience,setExperience]=useState(false)
    const navication =useNavigate();

    const handleback = () =>{
        navication('/')
    }
    
    const handleClickEducation=()=>{
        setEducation(!education)
    }
    const handleClickExperience=()=>{
        setExperience(!experience)
    }
  return (
    <div className='vacancy-apply-form-body'>
          <div><IoMdArrowRoundBack  className='fs-3' onClick={handleback}/></div>
            <div className='vacancy-apply-form-header'>
                <h2>Intern Front-End  Developer   -   Fully Remote</h2>
                <h5>Application</h5>
             </div>
                 <Form>
                    <legend className='mt-4 mb-4 vacancy-apply-form-legend' >PERSONAL DETAILS  <span>*</span> </legend>
                       <div className="row mt-3">
                         <div className="col-6 mb-4">
                            <Form.Group>    
                                <FormControl
                                required
                                type="text"
                                placeholder="NIC"
                                className='vacancy-apply-form-input'
                                />
                                <Form.Control.Feedback type="invalid">
                                    Please enter your NIC!
                                </Form.Control.Feedback>
                            </Form.Group>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-6">
                                <Form.Group>
                                    <FormControl
                                    required
                                    type="text"      
                                    placeholder="First Name  "
                                    className='vacancy-apply-form-input'
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Please enter your First Name!
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </div>

                          <div className="col-6">
                                <Form.Group>
                                    <FormControl
                                    required
                                    type="text" 
                                    placeholder="Last Name "
                                    className='vacancy-apply-form-input'
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Please enter your Last Name!
                                    </Form.Control.Feedback>
                                </Form.Group>
                          </div>
                        </div>

                <legend className='mt-4 mb-4 vacancy-apply-form-legend' >RESIDENTIAL ADDRESS  <span>*</span></legend>
                       <div className="row ">
                         <div className="col-6 mb-4">
                            <Form.Group>    
                                <FormControl
                                required
                                type="text"
                                placeholder="Street Address "
                                className='vacancy-apply-form-input'
                                />
                                <Form.Control.Feedback type="invalid">
                                    Please enter your Street Address!
                                </Form.Control.Feedback>
                            </Form.Group>
                         </div>

                         <div className="col-6 mb-4">
                            <Form.Group>    
                                <FormControl
                                required
                                type="text"
                                placeholder="Street Address  ( optional )"
                                className='vacancy-apply-form-input'
                                />
                            </Form.Group>
                         </div>
                        </div>

                        <div className="row">
                            <div className="col-3">
                                <Form.Group>
                                    <FormControl
                                    required
                                    type="number" 
                                    placeholder="Postal code "
                                    className='vacancy-apply-form-input'
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Please enter your Postal code 
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </div>
                            <div className="col-4">
                                <Form.Group>
                                    <FormControl
                                    required
                                    type="text" 
                                    placeholder="City"
                                    className='vacancy-apply-form-input'
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Please enter your City
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </div>
                            <div className="col-5">
                                <Form.Group controlId="formBasicSelect">
                                    <Form.Control as="select" style={{color: '#A3A2A2',fontSize:'14px'}} required className='vacancy-apply-form-input'>
                                        <option value="" >Country </option>
                                        <option value="option1">Option 1</option>
                                        <option value="option2">Option 2</option>
                                        <option value="option3">Option 3</option>
                                    </Form.Control>
                                    <Form.Control.Feedback type="invalid">
                                       Please select Country!
                                    </Form.Control.Feedback>
                                </Form.Group>
                                </div>
                           
                        </div>

                        <legend className='mt-4 mb-4 vacancy-apply-form-legend'>CONTACT DETAILS  <span>*</span></legend>
                        <div className="row">
                            <div className="col-2">
                                <Form.Group>
                                    <FormControl
                                    required
                                    type="number" 
                                    placeholder="+94"
                                    className='ps-5 vacancy-apply-form-input'
                                    
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Please enter your Postal code 
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </div>
                            <div className="col-4">
                                <Form.Group>
                                    <FormControl
                                    required
                                    type="text" 
                                    placeholder="Phone number"
                                    className='vacancy-apply-form-input'
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Please enter your Phone number
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </div>
                            <div className="col-6">
                                <Form.Group>
                                    <FormControl
                                    required
                                    type="text" 
                                    placeholder="Email Address   "
                                    className='vacancy-apply-form-input'
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Please enter your Email Address  
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </div>
                        </div>

                        <div className='row d-flex'>
                          <legend className='mt-4 mb-4 col-10 vacancy-apply-form-legend' >EDUCATION ( optional )</legend>
                          <div className='col-2 mt-4'><div className='vacancy-apply-form-add ' onClick={handleClickEducation}><FaPlus className='me-3'/>ADD</div></div>
                          {education && (
                            <div>
                            <div className="row">
                            <div className="col-12">
                                <Form.Group>
                                    <FormControl
                                    required
                                    type="text" 
                                    placeholder="School"
                                    className='vacancy-apply-form-input'
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Please enter your School
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </div>
                            <div className="col-12">
                                <Form.Group>
                                    <FormControl
                                    required
                                    type="text" 
                                    placeholder="Company"
                                    className='mt-4 vacancy-apply-form-input'
                                    
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Please enter your Company
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </div>
                        </div>

                        <div className="row mt-4">
                             <div className="col-6">
                                <FormControl
                                required
                                type="date"
                                placeholder="Start Date"
                                className='vacancy-apply-form-input'
                                />
                                <Form.Control.Feedback type="invalid">
                                    Please select a Start Date!
                                </Form.Control.Feedback>
                             </div>
                             <div className="col-6">
                                <FormControl
                                required
                                type="date"
                                placeholder="End Date"
                                className='vacancy-apply-form-input'
                                />
                                <Form.Control.Feedback type="invalid">
                                    Please select a End Date!
                                </Form.Control.Feedback>
                             </div>
                          </div>

                        </div>
                          )}
                        </div>

                        <div className='row'>
                          <legend className='mt-4 mb-4 col-10 vacancy-apply-form-legend' >EXPERIENCE  ( optional )</legend>
                          <div className='col-2 mt-4'><div className='vacancy-apply-form-add ' onClick={handleClickExperience}><FaPlus className='me-3'/>ADD</div></div>
                          {experience && (
                            <div>
                                <div className="row">
                                <div className="col-7">
                                    <Form.Group>
                                        <FormControl
                                        required
                                        type="text" 
                                        placeholder="Title"
                                        className='vacancy-apply-form-input'
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            Please enter your Title
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </div>
                                <div className="col-12">
                                    <Form.Group>
                                        <FormControl
                                        required
                                        type="text" 
                                        placeholder="Company"
                                        className='mt-4 vacancy-apply-form-input'
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            Please enter your Company
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </div>
                            </div>

                            <div className="row mt-4">
                                 <div className="col-6">
                                    <FormControl
                                    required
                                    type="date"
                                    placeholder="Start Date"
                                    className='vacancy-apply-form-input'
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Please select a Start Date!
                                    </Form.Control.Feedback>
                                 </div>
                                 <div className="col-6">
                                    <FormControl
                                    required
                                    type="date"
                                    placeholder="End Date"
                                    className='vacancy-apply-form-input'
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Please select a End Date!
                                    </Form.Control.Feedback>
                                 </div>
                            </div>

                            <div className="row">
                                <div className="mt-4">
                                    <Form.Group controlId="formBasicRadio">
                                    <Form.Check 
                                        type="radio"
                                        label="I currently work here"
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Please enter your Title
                                    </Form.Control.Feedback>
                                    </Form.Group>
                                </div>
                                </div>


                        </div>
                          )}
                        </div>

                        <div className='row'>
                           <legend className='mt-4 mb-4 vacancy-apply-form-legend' >RESUME  <span>*</span></legend> 
                           <div className='col-12 vacancy-apply-form-resume '>
                               <BsUpload className='col-12 vacancy-apply-form-resume-upload' />
                               <span>Drag and drop to upload </span>
                               <div>Upload</div>

                           </div>
                        </div>
                       

                        <div className="form-group mt-5 mb-2 d-flex">
                            <button type="submit" className='vacancy-apply-form-submit'  >SUBMIT  APPLICATION </button>
                        </div>
                    </Form>

    </div>
  )
}

export default VacancyApplyForm