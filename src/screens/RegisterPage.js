import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const RegisterPage = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

//!register
// const navigate = useNavigate();

// const handleRegister = async (event) => {
//   event.preventDefault();

//   const email = event.target.elements.email.value;
//   const firstName = event.target.elements.firstName.value;
//   const lastName = event.target.elements.lastName.value;
//   const password = event.target.elements.password.value;
//   const userPhoto = "string"; // Replace with the actual user photo

//   try {
//     // Send registration request
//     await axios.post("http://localhost:8080/user-data/sign-up-user", {
//       email,
//       firstName,
//       lastName,
//       password,
//       userPhoto,
//     });

//     // Registration successful, navigate to the home page
//     navigate("/");
//   } catch (error) {
//     console.error(error);
//     // Handle registration error
//   }
// };
const navigate = useNavigate();
const handleRegister = async (event) => {
  event.preventDefault();

  const email = event.target.elements.email.value;
  const firstName = event.target.elements.firstName.value;
  const lastName = event.target.elements.lastName.value;
  const password = event.target.elements.password.value;
  const userPhoto = "string"; // Replace with the actual user photo

  try {
    // Send registration request
    const response = await axios.post("http://localhost:8080/user-data/sign-up-user", {
      email,
      firstName,
      lastName,
      password,
      userPhoto,
    });

    // Save the user token to local storage
    const token = response.data.token;
    localStorage.setItem("userToken", token);

    // Redirect to the home page
    navigate("/vacancies");
  } catch (error) {
    // Handle registration error
    console.error("Registration failed:", error);
  }
};


  return (
    <div className="login">
      <nav>
        <Link className="logo" to="">
          ITJF
        </Link>
        <div className="reg-log-container">
          <Link to="/login">Log In</Link>
          <Link to="/register">Register</Link>
        </div>
      </nav>
      <section className="login-section">
        <div className="login-container">
          <h2>Register</h2>
          <form onSubmit={handleRegister}>
            <label htmlFor="name-input">Name</label>
            <input
              id="name-input"
              type="text"
              placeholder="John"
              autoComplete="off"
              name="firstName"
            ></input>
            <label htmlFor="surname-input">Surname</label>
            <input
              id="surname-input"
              type="text"
              placeholder="Brown"
              autoComplete="off"
              name="lastName"
            ></input>
            <label htmlFor="email-input">Email</label>
            <input
              id="email-input"
              placeholder="example@gmail.com"
              type="email"
              autoComplete="off"
              name="email"
            ></input>
            <label htmlFor="pass-input">Password</label>
            <div className="div-input">
              <input
                type={passwordVisible ? "text" : "password"}
                name="password"
                id="pass-input"
              />
              <i className="password-icon" onClick={togglePasswordVisibility}>
                {passwordVisible ? (
                  <i className="fa-solid fa-eye"></i>
                ) : (
                  <i className="fa-solid fa-eye-slash"></i>
                )}
              </i>
            </div>
            <input className="form-submit-login" type="submit" value="Register"></input>
          </form>
        </div>
      </section>
    </div>
  );
};

export default RegisterPage;
