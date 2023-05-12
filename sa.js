import React, { useState } from "react";
import { Link } from "react-router-dom";
import vacancies from "../data.js";

const VacanciesPage = () => {

  //search
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedName, setSelectedName] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  //test
  const [selectedEmployment, setSelectedEmployment] = useState("");
  const [selectedExperience, setSelectedExperience] = useState("");
  const [selectedEnglish, setSelectedEnglish] = useState("");

  const handleEmploymentChange = (e) => {
    setSelectedEmployment(e.target.value);
  };

  const handleExperienceChange = (e) => {
    setSelectedExperience(e.target.value);
  };

  const handleEnglishChange = (e) => {
    setSelectedEnglish(e.target.value);
  };

  const handleClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const filteredVacancies = vacancies.filter(
    (vacancy) =>
      vacancy.vacancy_name.toLowerCase().includes(selectedName.toLowerCase()) &&
      (selectedCategory === "" ||
        vacancy.vacancy_category === selectedCategory) &&
      (selectedCountry === "" ||
        (selectedCountry === "Others" &&
          !["Ukraine", "Poland"].includes(vacancy.vacancy_country)) ||
        (selectedCountry !== "Others" &&
          vacancy.vacancy_country === selectedCountry)) &&
      (selectedEmployment === "" ||
        vacancy.form_of_employment === selectedEmployment) &&
      (selectedExperience === "" ||
        (selectedExperience === "5+" &&
          vacancy.expected_work_experience >= 5) ||
        vacancy.expected_work_experience === Number(selectedExperience)) &&
      (selectedEnglish === "" ||
        vacancy.expected_english_level === selectedEnglish)
  );

  const totalPages = Math.ceil(filteredVacancies.length / itemsPerPage);

  const paginatedVacancies = filteredVacancies.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  //reset
  const handleResetFilter = () => {
    setSelectedName("");
    setSelectedCategory("");
    setSelectedCountry("");
    setSelectedEmployment("");
    setSelectedExperience("");
    setSelectedEnglish("");
    setCurrentPage(1);
  };

  return (
    <div className="vacancies-section-page">
      <section className="main-vacancies">
        <h1 className="title">Vacancies on Galera</h1>
        <div className="horizontal-line-med"></div>
        <div className="main-vacancies-container">
          <div className="vacancies-container">
            {paginatedVacancies.length > 0 ? (
              paginatedVacancies.map((vacancy) => (
                <div key={vacancy.vacancy_id} className="vacancy-card">
                  <div className="main-vac-info">
                    <Link to={`/vacancies/${vacancy.vacancy_id}`}>
                      {vacancy.vacancy_name}
                    </Link>
                    <h2>
                      {vacancy.salary_from}$ - {vacancy.salary_to}$
                    </h2>
                    <p>{vacancy.creation_data}</p>
                  </div>
                  <div className="horizontal-line-med"></div>
                </div>
              ))
            ) : (
              <div className="not-found-vac">No results found!</div>
            )}
          </div>

          <div className="filters-container">
        
            <div className="filter-box">
              <div>
                {" "}
                <label htmlFor="minSalary">Min salary:</label>
                <input id="minSalary" type="number" />
                <br />
                <label htmlFor="maxSalary">Max salary:</label>
                <input id="maxSalary" type="number" />
              </div>
            </div>

            <button className="reset-filters-btn" onClick={handleResetFilter}>
              Reset filters
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VacanciesPage;
