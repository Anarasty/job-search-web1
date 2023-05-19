import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const LoginPage = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  //!LOGIN

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/user-data/sign-in", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        // Аутентификация прошла успешно, сохранение токена в localStorage
        const token = data.token;
        localStorage.setItem("token", token);

        // Перенаправление на главную страницу
        navigate("/vacancies");
      } else {
        // Обработка ошибки от сервера
        setError(data.responseMessage);
      }
    } catch (error) {
      // Обработка ошибки сети
      setError("Wrong input! Check email or password!");
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
          <h2>Login</h2>
          <form onSubmit={handleFormSubmit}>
            <label htmlFor="email-input">Email</label>
            <input
              id="email-input"
              placeholder="example@gmail.com"
              type="email"
              autoComplete="off"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
            <label htmlFor="pass-input">Password</label>
            <div className="div-input">
              <input
                type={passwordVisible ? "text" : "password"}
                name="password"
                id="pass-input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <i className="password-icon" onClick={togglePasswordVisibility}>
                {passwordVisible ? (
                  <i className="fa-solid fa-eye"></i>
                ) : (
                  <i className="fa-solid fa-eye-slash"></i>
                )}
              </i>
            </div>
            {error && <div className="error-message">{error}</div>}
            <input className="form-submit-login" type="submit" value="Login"></input>
          </form>
        </div>
      </section>
    </div>
  );
};

export default LoginPage;
