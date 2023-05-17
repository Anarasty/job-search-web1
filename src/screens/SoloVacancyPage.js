import React from "react";
import { Link, useParams } from "react-router-dom";
// import vacancies from "../data.js";
import { useState } from "react";
import { useEffect } from "react";

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
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [resumeFile, setResumeFile] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleResumeChange = (event) => {
    setResumeFile(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Email: ${email}`);
    console.log(`Message: ${message}`);
    console.log(`ResumeFile: ${resumeFile}`);
    setEmail("");
    setMessage("");
    setResumeFile("");
    setShowApplyForm(false);
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

  return (
    <div className="solo-vacancy-section">
      <nav>
        <div className="main-links">
          <Link className="logo" to="/">
            Galera
          </Link>
          <Link to="/vacancies">Vacancies</Link>
          <Link to="/salaries">Salaries</Link>
        </div>
        <div className="dropdown-menu">
          <button onClick={toggleDropdown}>User</button>
          {isOpen && (
            <ul>
              <li>
                <Link href="#">Profile</Link>
              </li>
              <li>
                <Link href="#">Log out</Link>
              </li>
            </ul>
          )}
        </div>
      </nav>
      <div className="vac-container">
        <div className="vacancy-container">
          <div className="vac-main-info">
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
                <label htmlFor="email-input">Email: </label>
                <input
                  autoComplete="off"
                  id="email-input"
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
                />
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
                    onChange={handleResumeChange}
                    id="resume-input"
                    type="file"
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
          <h4>Required experience: {vacancy?.expectedWorkExperience} year(s)</h4>
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
          <p>&copy; 2023 Galera. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default SoloVacancyPage;
