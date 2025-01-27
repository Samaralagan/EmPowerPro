import React, { useState } from "react";
import "./VacancyApplyForm.css";
import { Form, FormControl } from "react-bootstrap";
import { FaPlus } from "react-icons/fa";
import { BsUpload } from "react-icons/bs";
import { useDropzone } from "react-dropzone";
import { useEffect, useCallback } from "react";

const VacancyApplyForm = () => {
  const [countries, setCountries] = useState([]);
  const namePattern = /^[A-Za-z]+$/;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phonePattern = /^07\d{8}$/;

  const [errors, setErrors] = useState({});

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    postalcode: "",
    city: "",
    country: "",
    phone: "",
    email: "",
    resume: "",
    countryCode: "", // Added countryCode field
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    console.log("button triggered");
    e.preventDefault();
    const newErrors = {};

    if (!formData.firstName) {
      newErrors.firstName = "Please enter your First Name!";
    } else if (!namePattern.test(formData.firstName)) {
      newErrors.firstName = "First Name can only contain letters!";
    }

    if (!formData.lastName) {
      newErrors.lastName = "Please enter your Last Name!";
    } else if (!namePattern.test(formData.lastName)) {
      newErrors.lastName = "Last Name can only contain letters!";
    }

    if (!formData.phone) {
      newErrors.phone = "Please enter your phone number!";
    } else if (!phonePattern.test(formData.phone)) {
      newErrors.phone = "Please enter a valid Phone number!";
    }

    if (!formData.email) {
      newErrors.email = "Please enter your Email!";
    } else if (!emailPattern.test(formData.email)) {
      newErrors.email = "Please enter a valid Email!";
    }

    if (!formData.address)
      newErrors.address = "Please enter your Street Address!";

    if (!formData.postalcode)
      newErrors.postalcode = " Please enter your Postal code";

    if (!formData.city) newErrors.city = " Please enter your City";

    if (!formData.country) newErrors.country = " Please select your Country!";

    if (!formData.resume) newErrors.resume = "Please upload your resume!";

    setErrors(newErrors);
    console.log(errors);

    if (Object.keys(newErrors).length === 0) {
      console.log(formData);
      // Send data to backend
      // axios
      //   .post("/api/submit-application", formData)
      //   .then((response) => {
      //     alert("Application submitted successfully!");
      //   })
      //   .catch((error) => {
      //     console.error("Error submitting application:", error);
      //     alert("There was an error. Please try again.");
      //   });
    }
  };

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        setCountries(data.map((country) => country.name.common));
      })
      .catch((error) => {
        console.error("Error fetching countries:", error);
      });
  }, []);

  const onDrop = useCallback((acceptedFiles) => {
    setFormData((prev) => ({
      ...prev,
      resume: acceptedFiles[0], // Store the file in state
    }));
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: ".pdf, .doc, .docx",
  });

  return (
    <div className="vacancy-apply-form-body">
      <div className="vacancy-apply-form-header">
        <h2>Intern Front-End Developer - Fully Remote</h2>
        <h5>Application</h5>
      </div>
      <Form onSubmit={handleSubmit}>
        <legend className="mt-4 mb-4 vacancy-apply-form-legend">
          PERSONAL DETAILS <span>*</span>{" "}
        </legend>

        <div className="row">
          <div className="col-6">
            <Form.Group>
              <FormControl
                required
                name="firstName"
                type="text"
                placeholder="First Name"
                className="vacancy-apply-form-input"
                onChange={handleChange}
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
                name="lastName"
                onChange={handleChange}
                type="text"
                placeholder="Last Name"
                className="vacancy-apply-form-input"
              />
              <Form.Control.Feedback type="invalid">
                Please enter your Last Name!
              </Form.Control.Feedback>
            </Form.Group>
          </div>
        </div>

        <legend className="mt-4 mb-4 vacancy-apply-form-legend">
          RESIDENTIAL ADDRESS <span>*</span>
        </legend>
        <div className="row ">
          <div className="col-6 mb-4">
            <Form.Group>
              <FormControl
                required
                name="address"
                onChange={handleChange}
                type="text"
                placeholder="Street Address "
                className="vacancy-apply-form-input"
              />
              <Form.Control.Feedback type="invalid">
                Please enter your Street Address!
              </Form.Control.Feedback>
            </Form.Group>
          </div>
        </div>

        <div className="row">
          <div className="col-3">
            <Form.Group>
              <FormControl
                required
                name="postalcode"
                onChange={handleChange}
                type="number"
                placeholder="Postal code"
                className="vacancy-apply-form-input"
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
                name="city"
                onChange={handleChange}
                type="text"
                placeholder="City"
                className="vacancy-apply-form-input"
              />
              <Form.Control.Feedback type="invalid">
                Please enter your City
              </Form.Control.Feedback>
            </Form.Group>
          </div>
          <div className="col-5">
            <Form.Group controlId="formBasicSelect">
              <Form.Control
                as="select"
                style={{ color: "#A3A2A2", fontSize: "14px" }}
                name="country"
                onChange={handleChange}
                required
                className="vacancy-apply-form-input"
              >
                <option value="">Select Country</option>
                {countries.map((country, index) => (
                  <option key={index} value={country}>
                    {country}
                  </option>
                ))}
              </Form.Control>
              <Form.Control.Feedback type="invalid">
                Please select a country!
              </Form.Control.Feedback>
            </Form.Group>
          </div>
        </div>

        <legend className="mt-4 mb-4 vacancy-apply-form-legend">
          CONTACT DETAILS <span>*</span>
        </legend>
        <div className="row">
          <div className="col-2">
            <Form.Group>
              <FormControl
                required
                name="countryCode"
                onChange={handleChange}
                type="number"
                placeholder="+94"
                className="ps-5 vacancy-apply-form-input"
              />
              <Form.Control.Feedback type="invalid">
                Please enter your country code
              </Form.Control.Feedback>
            </Form.Group>
          </div>
          <div className="col-4">
            <Form.Group>
              <FormControl
                required
                name="phone"
                onChange={handleChange}
                type="text"
                placeholder="Phone number"
                className="vacancy-apply-form-input"
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
                name="email"
                onChange={handleChange}
                type="text"
                placeholder="Email Address"
                className="vacancy-apply-form-input"
              />
              <Form.Control.Feedback type="invalid">
                Please enter your Email Address
              </Form.Control.Feedback>
            </Form.Group>
          </div>
        </div>

        <div className="row">
          <legend className="mt-4 mb-4 vacancy-apply-form-legend">
            RESUME <span>*</span>
          </legend>
          <div {...getRootProps()} className="col-12 vacancy-apply-form-resume">
            <input {...getInputProps()} />
            <BsUpload className="col-12 vacancy-apply-form-resume-upload" />
            {formData.resume ? (
              <div style={{ all: "unset" }}>{formData.resume.name}</div>
            ) : (
              <span>Drag and drop to upload</span>
            )}
            <div>Upload</div>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default VacancyApplyForm;
