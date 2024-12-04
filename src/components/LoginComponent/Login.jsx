import React, { useState } from "react";
import "./Login.css";
import logo from "../../assets/images/logo.png";
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { Password } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { checkLogin } from "../../service/LoginService";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const navigator = useNavigate();

  function validateForm() {
    let formValid = true;
    const errorsCopy = {};
    if (!username.trim()) {
      errorsCopy.username = "Username Name is required";
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
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  function handleSubmit(e) {
    e.preventDefault();
    console.log(errors);

    if (validateForm()) {
      console.log("test1");
      checkLogin(username, password)
        .then((response) => {
          console.log(response.data);
          if (response.data.accessToken) {
            localStorage.setItem("token", response.data.accessToken);
            localStorage.setItem("role", response.data.role);
            localStorage.setItem("userId", response.data.userId);

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
              // Default page if role doesn't match
              navigator("/");
            }
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }

  const [showLock, setShowLock] = useState(true);
  const handleShowLock = (e) => {
    if (e.target.value === "") {
      setShowLock(true);
    } else {
      setShowLock(false);
    }
  };
  return (
    <div className="login-body">
      <div className="login-body-leftpart">
        <img src={logo} alt="" className="login-left-logo" />
        <h1>Welcome Back</h1>
        <p>
          Your Comprehensive Solution for Efficient Workforce Management Sign in
          to access a complete suite of tools designed to streamline every
          aspect of your employee management processes.
        </p>
        <div>Let’s Get Started</div>
      </div>
      <div className="login-body-rightpart">
        <form action="">
          <h2>Login Account</h2>
          <div class="login-body-right-input">
            <span class="login-body-right-input-icons">
              <MdEmail />
            </span>
            <input
              className={`${errors.username ? "is-invalid" : ""}`}
              type="text"
              value={username}
              onChange={handleUserNameChange}
              required
            />
            <label>User name</label>
            {errors.username && (
              <div className="invalid-feedback">{errors.username}</div>
            )}
          </div>

          <div class="login-body-right-input">
            <span class="login-body-right-input-icons">
              {showLock && <FaLock />}
            </span>
            <input
              type="password"
              required
              value={password}
              onChange={handlePasswordChange}
            />

            {/* (must come inside password) onChange={handleShowLock} */}
            <label>Password</label>
            {errors.username && (
              <div className="invalid-feedback">{errors.password}</div>
            )}
          </div>

          <div className="login-body-right-forget-password">
            {" "}
            <p>Forget Password ?</p>
          </div>
          <div className="login-signin">
            <button onClick={handleSubmit}>Sign In</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
