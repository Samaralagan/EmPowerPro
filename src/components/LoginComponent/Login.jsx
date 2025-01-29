import React, { useState } from "react";
import "./Login.css";
import logo from "../../assets/images/logo.png";
import { MdEmail } from "react-icons/md";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { checkLogin } from "../../service/LoginService";

const Login = () => {
  // const [username, setUsername] = useState("");
  // const [password,setPassword] = useState("");
  // const [error, setError] = useState("");
  // const navigator = useNavigate();

  const [showPopup, setShowPopup] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); // State for toggling password visibility
  const [errors, setErrors] = useState({
    username: "", // Changed from email to username to match the form fields
    password: "",
  });

  const navigator = useNavigate();

  function validateForm() {
    let formValid = true;
    const errorsCopy = {};
    if (!username.trim()) {
      errorsCopy.username = "Username is required";
      formValid = false;
    }

    if (!password.trim()) {
      errorsCopy.password = "Password is required";
      formValid = false;
    }
    setErrors(errorsCopy);
    return formValid;
  }

  const handleUserNameChange = (e) => {
    setUsername(e.target.value);
    // Clear error when user starts typing
    if (errors.username) {
      setErrors((prev) => ({ ...prev, username: "" }));
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    // Clear error when user starts typing
    if (errors.password) {
      setErrors((prev) => ({ ...prev, password: "" }));
    }
  };

  function handleSubmit(e) {
    e.preventDefault();
    if (validateForm()) {
      checkLogin(username, password)
        .then((response) => {
          if (response.data.accessToken) {
            // Store user data in localStorage
            localStorage.setItem("token", response.data.accessToken);
            localStorage.setItem("role", response.data.role);
            localStorage.setItem("userId", response.data.userId);
            localStorage.setItem("firstname", response.data.firstName);
            localStorage.setItem("lastname", response.data.lastName);

            const role = response.data.role;
            if (role === "Admin") {
              navigator("/Dash Board/Admin");
            } else if (role === "Employee") {
              navigator("/Dash Board/Employee");
            } else if (role === "TeamLead") {
              navigator("/Dash Board/TeamLeader");
            } else if (role === "HR") {
              navigator("/Dash Board/HR");
            } else if (role === "Finance") {
              navigator("/Dash Board/FinanceAndSupport");
            } else if (role === "Executive") {
              navigator("/Dash Board/Executive");
            } else {
              navigator("/");
            }
          }
        })
        .catch((error) => {
          console.error(error);
          // Add error handling for failed login attempts
          setErrors((prev) => ({
            ...prev,
            password: "Invalid username or password",
          }));
        });
    }
  }

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <div className="login-body">
      <div className="login-body-leftpart">
        <img src={logo} alt="Company Logo" className="login-left-logo" />
        <h1>Welcome Back</h1>
        <p>
          Your Comprehensive Solution for Efficient Workforce Management. Sign
          in to access a complete suite of tools designed to streamline every
          aspect of your employee management processes.
        </p>
        <div>Let's Get Started</div>
      </div>
      <div className="login-body-rightpart">
        <form onSubmit={handleSubmit}>
          <h2>Login Account</h2>
          <div className="login-body-right-input">
            <span className="login-body-right-input-icons">
              <MdEmail />
            </span>
            <input
              className={errors.username ? "is-invalid" : ""}
              type="text"
              value={username}
              onChange={handleUserNameChange}
              required
            />
            <label>User Name</label>
            {errors.username && (
              <div className="invalid-feedback">{errors.username}</div>
            )}
          </div>

          <div className="login-body-right-input">
            <span
              // onClick={togglePasswordVisibility}
              className="login-body-right-input-icons"
            >
              {showPassword ? <FaEye /> : <FaEyeSlash />}
            </span>
            <input
              className={`${errors.password ? "is-invalid" : ""}`}
              type={showPassword ? "text" : "password"}
              required
              value={password}
              onChange={handlePasswordChange}
            />
            <label>Password</label>
            {errors.password && (
              <div className="invalid-feedback">{errors.password}</div>
            )}
          </div>

          <div className="login-body-right-forget-password">
            <p>Forget Password?</p>
          </div>
          <div className="login-signin">
            <button type="submit">Sign In</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
