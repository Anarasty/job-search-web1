import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

const LoginPage = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  return (
    <div className="login">
      <nav>
        <Link className="logo" to="/">
          Galera
        </Link>
        <div className="reg-log-container">
          <Link to="/login">Log In</Link>
          <Link to="/register">Register</Link>
        </div>
      </nav>
      <section className="login-section">
        <div className="login-container">
          <h2>Login</h2>
          <form>
            <label htmlFor="email-input">Email</label>
            <input
              id="email-input"
              placeholder="example@gmail.com"
              type="email"
              autoComplete="off"
            ></input>
            {/* <label htmlFor="pass-input">Password:</label> */}
            {/* <input id="pass-input" type="password"></input> */}
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
          </form>
        </div>
      </section>
    </div>
  );
};

export default LoginPage;
