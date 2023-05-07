import React, { useState } from "react";
import { Link } from "react-router-dom";
import vacancies from "../data.js";

const VacanciesPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showMoreId, setShowMoreId] = useState("");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const toggleShowMore = (vacancyId) => {
    setShowMoreId((prev) => (prev === vacancyId ? "" : vacancyId));
  };
  //PAGINATION
  // const itemsPerPage = 5;
  // const [currentPage, setCurrentPage] = useState(1);
  // const maxPage = Math.ceil(vacancies.length / itemsPerPage);

  // const handleClick = (pageNumber) => {
  //   setCurrentPage(pageNumber);
  // };

  // const paginatedVacancies = vacancies.slice(
  //   (currentPage - 1) * itemsPerPage,
  //   currentPage * itemsPerPage
  // );

  //search
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);
  // const maxPage = Math.ceil(vacancies.length / itemsPerPage);
  const [selectedName, setSelectedName] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");

  const handleClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // const filteredVacancies = vacancies.filter(
  //   (vacancy) =>
  //     vacancy.vacancy_name.toLowerCase().includes(selectedName.toLowerCase()) &&
  //     (selectedCategory === "" || vacancy.vacancy_category === selectedCategory) &&
  //     (selectedCountry === "" || vacancy.vacancy_country === selectedCountry)
  // );
  const filteredVacancies = vacancies.filter(
    (vacancy) =>
      vacancy.vacancy_name.toLowerCase().includes(selectedName.toLowerCase()) &&
      (selectedCategory === "" ||
        vacancy.vacancy_category === selectedCategory) &&
      (selectedCountry === "" ||
        (selectedCountry === "Others" &&
          !["Ukraine", "Poland"].includes(vacancy.vacancy_country)) ||
        (selectedCountry !== "Others" &&
          vacancy.vacancy_country === selectedCountry))
  );

  const totalPages = Math.ceil(filteredVacancies.length / itemsPerPage);

  const paginatedVacancies = filteredVacancies.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

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
        <div className="horizontal-line-med"></div>
        <div className="main-vacancies-container">
          <div className="vacancies-container">
            {paginatedVacancies.length > 0 ? (
              paginatedVacancies.map((vacancy) => (
                <div key={vacancy.vacancy_id} className="vacancy-card">
                  <div className="main-vac-info">
                    <h3>{vacancy.vacancy_name}</h3>
                    <h2>
                      {vacancy.salary_from}$ - {vacancy.salary_to}$
                    </h2>
                    <p>{vacancy.creation_data}</p>
                  </div>
                  <p>
                    {showMoreId === vacancy.vacancy_id
                      ? vacancy.vacancy_description
                      : vacancy.vacancy_description.slice(0, 254) + "..."}
                  </p>
                  {vacancy.vacancy_description.length > 254 && (
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        toggleShowMore(vacancy.vacancy_id);
                      }}
                    >
                      {showMoreId === vacancy.vacancy_id
                        ? "Show less"
                        : "Show more"}
                    </a>
                  )}
                  <div className="vac-secondary-info">
                    <h4>
                      <i className="fa-solid fa-location-dot"></i>{" "}
                      {vacancy.vacancy_country}, {vacancy.vacancy_city}
                    </h4>
                    <span>&#9830;</span>
                    <h4>{vacancy.form_of_employment}</h4>
                    <span>&#9830;</span>
                    <h4>
                      {vacancy.expected_work_experience} year(s) of experience
                    </h4>
                    <span>&#9830;</span>
                    <h4>English lvl: {vacancy.expected_english_level}</h4>
                  </div>
                  <div className="horizontal-line-med"></div>
                </div>
              ))
            ) : (
              <div className="not-found-vac">No results found!</div>
            )}
            <div className="pagination">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (pageNumber) => (
                  <button
                    key={pageNumber}
                    onClick={() => handleClick(pageNumber)}
                    className={currentPage === pageNumber ? "active" : ""}
                  >
                    {pageNumber}
                  </button>
                )
              )}
            </div>
          </div>

          <div className="filters-container">
            <div className="filter-box">
              <label htmlFor="search-vac-input">Find by name:</label>
              <input
                id="search-vac-input"
                value={selectedName}
                onChange={(e) => setSelectedName(e.target.value)}
              />
            </div>

            <div className="filter-box">
              <label>Programming language</label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option value="">All</option>
                <option value={"JavaScript"}>JavaScript</option>
                <option value={"Java"}>Java</option>
                <option value={"Python"}>Python</option>
              </select>
            </div>

            <div className="filter-box">
              <label>Country</label>
              <select
                value={selectedCountry}
                onChange={(e) => setSelectedCountry(e.target.value)}
              >
                <option value="">All</option>
                <option value={"Ukraine"}>Ukraine</option>
                <option value={"Poland"}>Poland</option>
                <option value={"Others"}>Others</option>
              </select>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VacanciesPage;
