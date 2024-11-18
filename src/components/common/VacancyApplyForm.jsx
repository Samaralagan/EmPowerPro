import React, { useState , useCallback,  useEffect} from 'react'
import './VacancyApplyForm.css'
import { Form, FormControl } from 'react-bootstrap'
import { FaPlus } from 'react-icons/fa'
import { BsUpload } from "react-icons/bs";
<<<<<<< HEAD
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useDropzone } from 'react-dropzone';



const VacancyApplyForm = () => {
=======
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

const VacancyApplyForm = () => {
    const[education,setEducation] = useState(false)
    const[experience,setExperience]=useState(false)
    const navication =useNavigate();

    const handleback = () =>{
        navication('/')
    }
>>>>>>> 1ad056f712db1a13cab62f203827ccb063292ab5
    
     const [nic, setNic] = useState('');
     const [firstName, setFirstName] = useState('');
     const [lastName, setLastName] = useState('');
     const [streetAddress, setStreetAddress] = useState('');
     const [phone, setPhone] = useState('');
     const [email, setEmail] = useState('');
     const [address, setAddress] = useState('');
     const [postalcode, setPostalcode] = useState('');
     const [city, setCity] = useState('');
     const [country, setCountry] = useState('');
     const [errors, setErrors] = useState({});

     const [countries, setCountries] = useState([]);
     const [selectedCountry, setSelectedCountry] = useState('');


     const nicPattern = /^(?:\d{9}[VXvx]|\d{12})$/;
     const namePattern = /^[A-Za-z]+$/;
     const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
     const phonePattern = /^07\d{8}$/;


     const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};


        if (!nic){
            newErrors.nic = "Please enter your NIC!";
        }
        else if (!nicPattern.test(nic)) {
            newErrors.nic = "Please enter a valid NIC number!";
        }

        if (!firstName) {
            newErrors.firstName = "Please enter your First Name!";
        } else if (!namePattern.test(firstName)) {
            newErrors.firstName = "First Name can only contain letters!";
        }

        if (!lastName) {
            newErrors.lastName = "Please enter your Last Name!";
        } else if (!namePattern.test(lastName)) {
            newErrors.lastName = "Last Name can only contain letters!";
        }

        if (!phone) {
            newErrors.phone = "Please enter your phone number!";
        } else if (!phonePattern.test(phone)) {
            newErrors.phone = "Please enter a valid Phone number!";
        }

        if (!email) {
            newErrors.email = "Please enter your Email!";
        } else if (!emailPattern.test(email)) {
            newErrors.email = "Please enter a valid Email!";
        }

        if (!address) newErrors.address = "Please enter your Street Address!";

        if (!postalcode) newErrors.postalcode = " Please enter your Postal code";

        if (!city) newErrors.city= " Please enter your City";

        if (!country) newErrors.country = " Please select your Country!";

        if (!fileName) newErrors.fileName = "Please upload your resume!";

        setErrors(newErrors);
    
        if (Object.keys(newErrors).length === 0) {
            console.log("Form submitted successfully");
        }
    };

    const [education, setEducation] = useState(false)
    const [experience, setExperience] = useState(false)

    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);

    const handleClickEducation = () => {
        setEducation(!education)
    }
    const handleClickExperience = () => {
        setExperience(!experience)
    }
<<<<<<< HEAD

    useEffect(() => {
        // Fetch the country list from the API
        fetch('https://restcountries.com/v3.1/all')
            .then(response => response.json())
            .then(data => {
               
                const countryList = data.map(country => ({
                    code: country.cca2,
                    name: country.name.common, 
                }));
                setCountries(countryList);
            })
            .catch(error => console.error('Error fetching countries:', error));
    }, []);
     
   
    //educational and experiences saving
     const handleSave = () => {
       
        console.log('Saved details');
      };

      const handleCancel = () => {
        setEducation(false); 
      };


      // Resume upload
    const onDrop = useCallback((acceptedFiles) => {
        setFileName(acceptedFiles[0].name);
    }, []);

    const { getRootProps, getInputProps } = useDropzone({
        onDrop, 
        accept: '.pdf, .doc, .docx', 
    });

    const [fileName, setFileName] = React.useState('');


    return (
        <div className='vacancy-apply-form-body'>
=======
  return (
    <div className='vacancy-apply-form-body'>
          <div><IoMdArrowRoundBack  className='fs-3' onClick={handleback}/></div>
>>>>>>> 1ad056f712db1a13cab62f203827ccb063292ab5
            <div className='vacancy-apply-form-header'>
                <h2>Intern Front-End  Developer   -   Fully Remote</h2>
                <h5>Application</h5>
            </div>
            <Form onSubmit={handleSubmit} noValidate  >
                <legend className='mt-4 mb-4 vacancy-apply-form-legend' >PERSONAL DETAILS  <span>*</span> </legend>
                <div className="row mt-3">
                    <div className="col-6 mb-4">
                        <Form.Group>
                            <FormControl
                                required
                                type="text"
                                placeholder="NIC"
                                className='vacancy-apply-form-input'
                                value={nic}
                                onChange={(e) => setNic(e.target.value)}
                                isInvalid={!!errors.nic}/>
                            <Form.Control.Feedback type="invalid">
                                {errors.nic}
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
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                isInvalid={!!errors.firstName}/>

                            <Form.Control.Feedback type="invalid">
                                {errors.firstName}
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
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                isInvalid={!!errors.lastName}/>

                            <Form.Control.Feedback type="invalid">
                                 {errors.lastName}
                            </Form.Control.Feedback>
                        </Form.Group>
                    </div>
                </div>

                <br/>

                <legend className='mt-4 mb-4 vacancy-apply-form-legend' >RESIDENTIAL ADDRESS  <span>*</span></legend>
                <div className="row ">
                    <div className="col-6 mb-4">
                        <Form.Group>
                            <FormControl
                                required
                                type="text"
                                placeholder="Street Address "
                                className='vacancy-apply-form-input'
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                isInvalid={!!errors.address}/>
                            <Form.Control.Feedback type="invalid">
                                {errors.address}
                            </Form.Control.Feedback>
                        </Form.Group>
                    </div>

                    <div className="col-6 mb-4">
                        <Form.Group>
                            <FormControl
                                type="text"
                                placeholder="Street Address  ( optional )"
                                className='vacancy-apply-form-input'
                                value={streetAddress}
                                onChange={(e) => setStreetAddress(e.target.value)}
                                isValid={streetAddress.length > 0}
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
                                value={postalcode}
                                onChange={(e) => setPostalcode(e.target.value)}
                                isInvalid={!!errors.postalcode}/>
                            <Form.Control.Feedback type="invalid">
                               {errors.postalcode}
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
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                                isInvalid={!!errors.city}/>
                            <Form.Control.Feedback type="invalid">
                                {errors.city}
                            </Form.Control.Feedback>
                        </Form.Group>
                    </div>

                    <div className="col-5">
                        <Form.Group controlId="formBasicSelect">
                            <Form.Control
                                as="select"
                                style={{ color: '#A3A2A2', fontSize: '14px' }}
                                required
                                className="vacancy-apply-form-input"
                                value={selectedCountry}
                                onChange={(e) => setSelectedCountry(e.target.value)}
                                isInvalid={!!errors.country}
                            >
                                <option value="">Select Country</option>
                                {countries.map((country) => (
                                    <option key={country.code} value={country.code}>
                                        {country.name}
                                    </option>
                                ))}
                            </Form.Control>
                            <Form.Control.Feedback type="invalid">
                                {errors.country}
                            </Form.Control.Feedback>
                        </Form.Group>
                    </div>
                </div>

                <br />
                <legend className='mt-4 mb-4 vacancy-apply-form-legend'>CONTACT DETAILS  <span>*</span></legend>
                <div className="row">
                    <div className="col-2">
                        <Form.Group>
                            <FormControl
                                readOnly
                                required
                                type="number"
                                placeholder="+94"
                                className='ps-5 vacancy-apply-form-input' />
                        </Form.Group>
                    </div>
                    <div className="col-4">
                        <Form.Group>
                            <FormControl

                                required
                                type="text"
                                placeholder="Phone number"
                                className='vacancy-apply-form-input'
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                isInvalid={!!errors.phone}/>
                            <Form.Control.Feedback type="invalid">
                                {errors.phone}
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
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                isInvalid={!!errors.email}/>
                            <Form.Control.Feedback type="invalid">
                               {errors.email}
                            </Form.Control.Feedback>
                        </Form.Group>
                    </div>
                </div>

                <br/>
                <div className='row d-flex'>
                    <legend className='mt-4 mb-4 col-10 vacancy-apply-form-legend' >EDUCATION ( optional )</legend>
                    <div className='col-2 mt-4'><div className='vacancy-apply-form-add ' onClick={handleClickEducation}><FaPlus className='me-3' />ADD</div></div>
                    {education && (
                        <div>
                            <div className="row">
                                <div className="col-12">
                                    <Form.Group>
                                        <FormControl
                                            type="text"
                                            placeholder="University /School"
                                            className='vacancy-apply-form-input'/>
                                    </Form.Group>
                                </div>
                                <div className="col-12">
                                    <Form.Group>
                                        <FormControl
                                            type="text"
                                            placeholder="Degree"
                                            className='mt-4 vacancy-apply-form-input'/>
                                    </Form.Group>
                                </div>
                            </div>

                            <div className="row mt-4">
                                <div className="col-6">
                                    <DatePicker
                                        selected={startDate}
                                        onChange={(date) => setStartDate(date)}
                                        placeholderText="Start Date"
                                        className="form-control vacancy-apply-form-input"
                                        style={{ width: '100%' }}
                                    />
                                </div>
                                <div className="col-6">
                                    <DatePicker
                                        selected={endDate}
                                        onChange={(date) => setEndDate(date)}
                                        placeholderText="End Date"
                                        className="form-control vacancy-apply-form-input"
                                        style={{ width: '100%' }}
                                    />
                                </div>
                            </div>

                            <div className="d-flex justify-content-end mt-5">
                                <button className="btn btn-primary me-4" onClick={handleSave}>Save</button>
                                <button className="btn btn-secondary" onClick={handleCancel}>Cancel</button>
                            </div>

                        </div>
                    )}
                </div>

                <br/>
                <div className='row'>
                    <legend className='mt-4 mb-4 col-10 vacancy-apply-form-legend' >EXPERIENCE  ( optional )</legend>
                    <div className='col-2 mt-4'>
                        <div className='vacancy-apply-form-add ' onClick={handleClickExperience}>
                            <FaPlus className='me-3' />ADD
                        </div>
                    </div>
                    {experience && (
                        <div>
                            <div className="row">
                                <div className="col-12">
                                    <Form.Group>
                                        <FormControl
                                            type="text"
                                            placeholder="Title"
                                            className='vacancy-apply-form-input'
                                        />
                                    </Form.Group>
                                </div>
                                <div className="col-12">
                                    <Form.Group>
                                        <FormControl
                                            type="text"
                                            placeholder="Company"
                                            className='mt-4 vacancy-apply-form-input'
                                        />
                                    </Form.Group>
                                </div>
                            </div>

                            <div className="row mt-4">
                                <div className="col-6">
                                    <DatePicker
                                        selected={startDate}
                                        onChange={(date) => setStartDate(date)}
                                        placeholderText="Start Date"
                                        className="form-control vacancy-apply-form-input"
                                        style={{ width: '100%' }}
                                    />
                                 
                                </div>
                                <div className="col-6">
                                    <DatePicker
                                        selected={endDate}
                                        onChange={(date) => setEndDate(date)}
                                        placeholderText="End Date"
                                        className="form-control vacancy-apply-form-input"
                                        style={{ width: '100%' }}
                                    />

                                </div>
                            </div>

                            <div className="row">
                                <div className="mt-4">
                                    <Form.Group controlId="formBasicRadio">
                                        <Form.Check
                                            type="radio"
                                            label="I currently work here"
                                        />
                                    </Form.Group>
                                </div>
                            </div>

                            <div className="d-flex justify-content-end mt-4">
                                <button className="btn btn-primary me-4" onClick={handleSave}>Save</button>
                                <button className="btn btn-secondary" onClick={handleCancel}>Cancel</button>
                            </div>


                        </div>
                    )}
                </div>


                <div className='row'>
                    <legend className='mt-4 mb-4 vacancy-apply-form-legend' >RESUME  <span>*</span></legend>
                    <div className='col-16 vacancy-apply-form-resume '>

                        <div
                            {...getRootProps()} // Get drag-and-drop functionality
                            className="vacancy-apply-form-resume-upload-area"
                        >
                            <BsUpload className='vacancy-apply-form-resume-upload-icon' />
                            <span>Drag and drop to upload</span>
                            <div>Or click to browse</div>
                            <input {...getInputProps()} /> {/* Hidden file input */}
                        </div>

                        {fileName && <div>Selected File: {fileName}</div>}
                        {errors.fileName && <div className="text-danger">{errors.fileName}</div>}

                    </div>
                </div>


                <div className="form-group mt-5 mb-5 d-flex">
                    <button type="submit" className='vacancy-apply-form-submit'  >SUBMIT  APPLICATION </button>
                </div>
            </Form>

        </div>
    )
}

export default VacancyApplyForm