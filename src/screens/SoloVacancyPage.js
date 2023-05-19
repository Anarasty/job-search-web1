import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
// import vacancies from "../data.js";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const SoloVacancyPage = () => {
  const { vacancy_id } = useParams();
  const [vacancy, setVacancy] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8080/vacancy/get/${vacancy_id}`)
      .then((response) => response.json())
      .then((data) => {
        setVacancy(data);
      })
      .catch((error) => console.error(error));
  }, [vacancy_id]);
  // const vacancy = vacancies.find(
  //   (vacancy) => vacancy.vacancyId === parseInt(vacancy_id)
  // );

  const [isOpen, setIsOpen] = useState(false);
  const [showMoreId, setShowMoreId] = useState("");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const toggleShowMore = (vacancyId) => {
    setShowMoreId((prev) => (prev === vacancyId ? "" : vacancyId));
  };

  const [showApplyForm, setShowApplyForm] = useState(false);
  // const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [resumeFile, setResumeFile] = useState("");

  const token = localStorage.getItem("token");
  //?test apply

  // const handleEmailChange = (event) => {
  //   setEmail(event.target.value);
  // };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleResumeChange = (event) => {
    setResumeFile(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(`Email: ${email}`);
    console.log(`Message: ${message}`);
    console.log(`ResumeFile: ${resumeFile}`);
    // setEmail("");
    setMessage("")
    setResumeFile("")
  };

  const toggleApplyForm = () => {
    setShowApplyForm(!showApplyForm);
  };

  // FORMAT date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear().toString();
    return `${day}.${month}.${year}`;
  };

  //!@!!! TETS2
  // const token = localStorage.getItem("token");

  const [isSaved, setIsSaved] = useState(false);
  useEffect(() => {
    fetch(`http://localhost:8080/vacancy/get/${vacancy_id}`)
      .then((response) => response.json())
      .then((data) => {
        setVacancy(data);

        // Проверка, сохранена ли вакансия
        fetch(
          `http://localhost:8080/saved-vacancy/get-saved-vacancies?token=${token}`
        )
          .then((response) => response.json())
          .then((savedVacancies) => {
            const isVacancySaved = savedVacancies.some(
              (savedVacancy) =>
                savedVacancy.vacancy.vacancyId === data.vacancyId
            );
            setIsSaved(isVacancySaved);
          })
          .catch((error) => console.error(error));
      })
      .catch((error) => console.error(error));
  }, [vacancy_id]);

  const handleSaveVacancy = () => {
    const apiUrl = `http://localhost:8080/saved-vacancy/add-vacancy?token=${token}&vacancyId=`;
    const requestUrl = apiUrl + vacancy.vacancyId;

    fetch(requestUrl, { method: "POST" })
      .then((response) => {
        if (response.ok) {
          setIsSaved(true); // Обновление сохраненного статуса
        }
      })
      .catch((error) => console.error(error));
  };

  //! USER
  const [userName, setUserName] = useState(""); 
  // const token = localStorage.getItem("token");
  fetch(
    `http://localhost:8080/user-data/admin/api/get-user-by-token?token=${token}`,
    {
      method: "GET",
      headers: {
        accept: "*/*",
      },
    }
  )
    .then((response) => response.json())
    .then((data) => {
      // Получение имени и фамилии пользователя из данных
      const firstName = data.firstName;
      const lastName = data.lastName;

      // Установка имени и фамилии в состояние
      setUserName(`${firstName} ${lastName}`);
    })
    .catch((error) => {
      // Обработка ошибки
      console.error("Error:", error);
    });

  //? LOGOUT
  const navigate = useNavigate();
  const handleLogout = () => {
    // Remove user token from local storage
    localStorage.removeItem("token");

    // Navigate to the login page
    navigate("/login");
  };

  return (
    <div className="solo-vacancy-section">
      <nav>
        <div className="main-links">
          <Link className="logo" to="/">
            ITJF
          </Link>
          <Link to="/vacancies">Vacancies</Link>
          <Link to="/saved">Saved</Link>
          <Link to="/feedbacks">Feedbacks</Link>
        </div>
        <div className="dropdown-menu">
          <button className="user-name-btn" onClick={toggleDropdown}>
            {userName}
          </button>
          {isOpen && (
            <ul>
              {/* <li>
                <Link href="#">Profile</Link>
              </li> */}
              <li>
                <button onClick={handleLogout}>Log out</button>
              </li>
            </ul>
          )}
        </div>
      </nav>
      <div className="vac-container">
        <div className="vacancy-container">
          <div className="vac-main-info">
            <span className="saved-vac" onClick={handleSaveVacancy}>
              {isSaved ? (
                <i className="fa-solid fa-star"></i>
              ) : (
                <i className="fa-regular fa-star"></i>
              )}
            </span>
            <h1>{vacancy?.vacancyName}</h1>
            <h2>
              {vacancy?.salaryFrom}$ - {vacancy?.salaryTo}$
            </h2>
            <p className="creation-data">{formatDate(vacancy?.creationDate)}</p>
            <p className="description-p">{vacancy?.vacancyDescription}</p>
            <button className="apply-btn" onClick={toggleApplyForm}>
              Apply
            </button>
            {showApplyForm && (
              <form onSubmit={handleSubmit}>
                <label htmlFor="message-input">
                  Write about yourself and why you applied for this position:{" "}
                </label>
                <textarea
                  rows="3"
                  id="message-input"
                  value={message}
                  onChange={handleMessageChange}
                ></textarea>

                <label htmlFor="resume-input">
                  Resume file:{" "}
                  <input
                    value={resumeFile}
                    // onChange={handleResumeChange}
                    onChange={handleResumeChange}
                    id="resume-input"
                    type="file"
                    name="file"
                  />
                </label>
                <input
                  type="submit"
                  value="Send"
                  className="send-apply-form"
                ></input>
              </form>
            )}
          </div>
        </div>
        <div className="vac-secondary-info">
          <h4>
            <i className="fa-solid fa-location-dot"></i>{" "}
            {vacancy?.vacancyCountry}, {vacancy?.vacancyCity}
          </h4>
          <h4>Form of employment: {vacancy?.formOfEmployment}</h4>
          <h4>
            Required experience: {vacancy?.expectedWorkExperience} year(s)
          </h4>
          <h4>Required english level: {vacancy?.expectedEnglishLevel}</h4>
        </div>
      </div>

      <footer>
        <div className="footer-container">
          <div>
            <h4>About Us</h4>
            <p>
              We are a job search platform focused on connecting talented IT
              professionals with leading companies in the industry.
            </p>
          </div>
          <div>
            <h4>Contact Us</h4>
            <p>Email: info@itjobs.com</p>
            <p>Phone: 555-1234</p>
            <p>Address: 123 Main St, Anytown USA</p>
          </div>
          <div>
            <h4>Follow Us</h4>
            <p>
              <i className="fab fa-facebook-square"></i>{" "}
              <a href="#">Facebook</a>
            </p>
            <p>
              <i className="fab fa-twitter-square"></i> <a href="#">Twitter</a>
            </p>
            <p>
              <i className="fab fa-linkedin"></i> <a href="#">LinkedIn</a>
            </p>
          </div>
        </div>

        <div>
          <p>&copy; 2023 IT Job Finder. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default SoloVacancyPage;
