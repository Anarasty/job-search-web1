import React, { useState } from "react";
import { Link } from "react-router-dom";
import vacancies from "../data.js";

const VacanciesPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="vacancies-section-page">
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

      <section className="main-vacancies">
        <h1 className="title">Vacancies on Galera</h1>
        <div className="vacancies-container">
          {vacancies.map((vacancy) => (
            <div key={vacancy.vacancy_id} className="vacancy-card">
              <div>
                <h3>Vacancy title: {vacancy.vacancy_name}</h3>
                <p>Publication date: {vacancy.creation_data}</p>
              </div>
              <p>Vacancy description: {vacancy.vacancy_description}</p>
              <a href="">Show more</a>
              <h4>
                Vacancy {vacancy.vacancy_country}, {vacancy.vacancy_city}
              </h4>
              <h4>Form of employment: {vacancy.form_of_employment}</h4>
              <h4>
                Expected work experience: {vacancy.expected_work_experience}{" "}
                years
              </h4>
              <h4>Expected english level: {vacancy.expected_english_level}</h4>
            </div>
          ))}
          <div className="horizontal-line-big"></div>
        </div>

        {/* <div className="filters-container"></div> */}
      </section>
    </div>
  );
};

export default VacanciesPage;
