import React from "react";
import { Link, useParams } from "react-router-dom";
import vacancies from "../data.js";
import { useState } from "react";

const SoloVacancyPage = () => {
  const { vacancy_id } = useParams();
  const vacancy = vacancies.find(
    (vacancy) => vacancy.vacancy_id === parseInt(vacancy_id)
  );

  const [isOpen, setIsOpen] = useState(false);
  const [showMoreId, setShowMoreId] = useState("");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const toggleShowMore = (vacancyId) => {
    setShowMoreId((prev) => (prev === vacancyId ? "" : vacancyId));
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
            <h1>{vacancy.vacancy_name}</h1>
            <h2>
              {vacancy.salary_from}$ - {vacancy.salary_to}$
            </h2>
            <p className="creation-data">{vacancy.creation_data}</p>
            <p className="description-p">{vacancy.vacancy_description}</p>
          </div>
        </div>
        <div className="vac-secondary-info">
          <h4>
            <i className="fa-solid fa-location-dot"></i>{" "}
            {vacancy.vacancy_country}, {vacancy.vacancy_city}
          </h4>
          <h4>Form of employment: {vacancy.form_of_employment}</h4>
          <h4>Required experience: {vacancy.expected_work_experience} year(s)</h4>
          <h4>Required english level: {vacancy.expected_english_level}</h4>
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
