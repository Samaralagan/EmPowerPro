import React, { useState } from "react";
import "./createuser.css";
import { createEmployee } from "../../service/ApplyJobService";
import { useNavigate } from "react-router-dom";

function CreatUser() {
  const [firstName, setFirstName] = useState(""); 
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [workTitle, setWorkTitle] = useState("");
  const [username, setUserName] = useState("");
  const [role, setRole] = useState("");
  const [password, setPassword] = useState("");
  const [experiences, setExperiences] = useState("");

  const [errors, setErrors] = useState({});

  const navigator = useNavigate();

  function validateForm() {
    let formValid = true;
    const errorsCopy = {};
    if (!firstName.trim()) {
      errorsCopy.firstName = "first Name is required";
      formValid = false;
    }

    if (!lastName.trim()) {
      errorsCopy.lastName = "last Name is required";
      formValid = false; 
    }
    if (!email.trim()) {
      errorsCopy.email = "Email is required";
      formValid = false;
    }
    if (!address.trim()) {
      errorsCopy.address = "Address is required";
      formValid = false;
    }
    if (!phoneNumber.trim()) {
      errorsCopy.phoneNumber = "Phone Number is required";
      formValid = false;
    }

    if (!workTitle.trim()) {
      errorsCopy.workTitle = "Work title is required";
      formValid = false;
    }

    if (!username.trim()) {
      errorsCopy.username = "User Name is required";
      formValid = false;
    }

    if (!role.trim()) {
      errorsCopy.role = "Role is required";
      formValid = false;
    }

    if (!password.trim()) {
      errorsCopy.password = "Password is required";
      formValid = false;
    }

    setErrors(errorsCopy);
    return formValid;
  }

  function saveEmployee(e) {
    e.preventDefault();

    if (validateForm()) {
      const employee = {
        firstName,
        lastName,
        email,
        address,
        phoneNumber: Number(phoneNumber),
        workTitle,
        username,
        role,
        password,
        experiences,
      };
      console.log(employee);

      createEmployee(employee)
        .then((response) => {
          console.log(response.data);
          navigator("/Dash Board/Admin");
        })
        .catch((error) => {
          console.error(error); 
          
        });
    }
  }
  return (
    <div>
      {/* <Header /> */}

      <div className="createuser-body">
        <form action="">
          <div className="darkbox">PERSONAL DETAILS</div>
          <br />
          <div class="d-flex">
            <div class="did-floating-label-content">
              <input
                className={`did-floating-input ${
                  errors.firstName ? "is-invalid" : ""
                }`}
                name="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                type="text"
                placeholder=" "
              />
              {errors.firstName && (
                <div className="invalid-feedback">{errors.firstName}</div>
              )}
              <label class="did-floating-label">First Name</label>
            </div>
            <div
              class="did-floating-label-content"
              style={{ marginLeft: "10%" }}
            >
              <input
                className={`did-floating-input ${
                  errors.lastName ? "is-invalid" : ""
                }`}
                name="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                type="text"
                placeholder=" "
              />
              {errors.lastName && (
                <div className="invalid-feedback">{errors.lastName}</div>
              )}
              <label class="did-floating-label">Last Name</label>
            </div>
          </div>

          <div class="d-flex">
            <div class="did-floating-label-content">
              <input
                className={`did-floating-input ${
                  errors.address ? "is-invalid" : ""
                }`}
                name="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                type="text"
                placeholder=" "
              />
              {errors.address && (
                <div className="invalid-feedback">{errors.address}</div>
              )}
              <label class="did-floating-label">Address</label>
            </div>
            <div
              class="did-floating-label-content"
              style={{ marginLeft: "10%" }}
            >
              <input
                className={`did-floating-input ${
                  errors.email ? "is-invalid" : ""
                }`}
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                placeholder=" "
              />
              {errors.email && (
                <div className="invalid-feedback">{errors.email}</div>
              )}
              <label class="did-floating-label">Email Address</label>
            </div>
          </div>

          <div class="d-flex">
            <div class="did-floating-label-content">
              <input
                className={`did-floating-input ${
                  errors.phoneNumber ? "is-invalid" : ""
                }`}
                name="phoneNumber"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                type="number"
                placeholder=" "
              />
              {errors.phoneNumber && (
                <div className="invalid-feedback">{errors.phoneNumber}</div>
              )}
              <label class="did-floating-label">Phone Number</label>
            </div>
            <div
              class="did-floating-label-content"
              style={{ marginLeft: "10%" }}
            >
              <input
                className={`did-floating-input ${
                  errors.workTitle ? "is-invalid" : ""
                }`}
                name="workTitle"
                value={workTitle}
                onChange={(e) => setWorkTitle(e.target.value)}
                type="text"
                placeholder=" "
              />
              {errors.workTitle && (
                <div className="invalid-feedback">{errors.workTitle}</div>
              )}
              <label class="did-floating-label">work Title</label>
            </div>
          </div>
          <br />

          <div className="darkbox">OTHER DETAILS</div>
          <br />
          <div class="d-flex">
            <div class="did-floating-label-content">
              <input
                className={`did-floating-input ${
                  errors.username ? "is-invalid" : ""
                }`}
                name="userName"
                value={username}
                onChange={(e) => setUserName(e.target.value)}
                type="text"
                placeholder=" "
              />
              {errors.username && (
                <div className="invalid-feedback">{errors.username}</div>
              )}
              <label class="did-floating-label">User Name</label>
            </div>
            <div
              class="did-floating-label-content"
              style={{ marginLeft: "10%" }}
            >
              <input
                className={`did-floating-input ${
                  errors.role ? "is-invalid" : ""
                }`}
                name="role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                type="text"
                placeholder=" "
              />
              {errors.role && (
                <div className="invalid-feedback">{errors.role}</div>
              )}
              <label class="did-floating-label">Role</label>
            </div>
          </div>
          <div class="d-flex">
            <div class="did-floating-label-content">
              <input
                className={`did-floating-input ${
                  errors.password ? "is-invalid" : ""
                }`}
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="text"
                placeholder=" "
              />
              {errors.password && (
                <div className="invalid-feedback">{errors.password}</div>
              )}
              <label class="did-floating-label">Password</label>
            </div>
            <div
              class="did-floating-label-content"
              style={{ marginLeft: "10%" }}
            >
              <input
                className="did-floating-input"
                name="experience"
                value={experiences}
                onChange={(e) => setExperiences(e.target.value)}
                type="text"
                placeholder=" "
              />

              <label class="did-floating-label">Experience</label>
            </div>
          </div>

          <div className="create-button-row">
            <button className="cancel-button">Cancel</button>
            <button className="create-button" onClick={saveEmployee}>
              Create User
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreatUser;
