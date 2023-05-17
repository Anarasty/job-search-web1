import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import vacancies from "../data.js";

const VacanciesPage = () => {
  const [vacancies, setVacancies] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/vacancy/all")
      .then((response) => response.json())
      .then((data) => setVacancies(data))
      .catch((error) => console.error(error));
  }, []);


  const [isOpen, setIsOpen] = useState(false);
  const [showMoreId, setShowMoreId] = useState("");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const toggleShowMore = (vacancyId) => {
    setShowMoreId((prev) => (prev === vacancyId ? "" : vacancyId));
  };

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
  const [minSalary, setMinSalary] = useState("");
  const [maxSalary, setMaxSalary] = useState("");

  const handleMinSalaryChange = (e) => {
    setMinSalary(e.target.value);
  };

  const handleMaxSalaryChange = (e) => {
    setMaxSalary(e.target.value);
  };
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
      // Фильтруем по минимальной зарплате
      (minSalary === "" || vacancy.salaryFrom >= Number(minSalary)) &&
      // Фильтруем по максимальной зарплате
      (maxSalary === "" || vacancy.salaryTo <= Number(maxSalary)) &&
      // Фильтруем по остальным параметрам, которые уже есть в коде
      vacancy.vacancyName.toLowerCase().includes(selectedName.toLowerCase()) &&
      (selectedCategory === "" ||
        vacancy.vacancyCategory === selectedCategory) &&
      (selectedCountry === "" ||
        (selectedCountry === "Others" &&
          !["Ukraine", "Poland"].includes(vacancy.vacancyCountry)) ||
        (selectedCountry !== "Others" &&
          vacancy.vacancyCountry === selectedCountry)) &&
      (selectedEmployment === "" ||
        vacancy.formOfEmployment === selectedEmployment) &&
      (selectedExperience === "" ||
        (selectedExperience === "5+" &&
          vacancy.expectedWorkExperience >= 5) ||
        vacancy.expectedWorkExperience === Number(selectedExperience)) &&
      (selectedEnglish === "" ||
        vacancy.expectedEnglishLevel === selectedEnglish)
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
    setMinSalary("");
    setMaxSalary("");
    setCurrentPage(1);
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
                <div key={vacancy.vacancyId} className="vacancy-card">
                  <div className="main-vac-info">
                    <Link to={`/vacancies/${vacancy.vacancyId}`}>
                      {vacancy.vacancyName}
                    </Link>
                    <h2>
                      {vacancy.salaryFrom}$ - {vacancy.salaryTo}$
                    </h2>
                    <p>{formatDate(vacancy.creationDate)}</p>
                  </div>
                  <p>
                    {showMoreId === vacancy.vacancyId
                      ? vacancy.vacancyDescription
                      : vacancy.vacancyDescription.slice(0, 254) + "..."}
                  </p>
                  {vacancy.vacancyDescription.length > 254 && (
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        toggleShowMore(vacancy.vacancyId);
                      }}
                    >
                      {showMoreId === vacancy.vacancyId
                        ? "Show less"
                        : "Show more"}
                    </a>
                  )}
                  <div className="vac-secondary-info">
                    <h4>
                      <i className="fa-solid fa-location-dot"></i>{" "}
                      {vacancy.vacancyCountry}, {vacancy.vacancyCity}
                    </h4>
                    <span>&#9830;</span>
                    <h4>{vacancy.formOfEmployment}</h4>
                    <span>&#9830;</span>
                    <h4>
                      {vacancy.expectedWorkExperience} year(s) of experience
                    </h4>
                    <span>&#9830;</span>
                    <h4>English lvl: {vacancy.expectedEnglishLevel}</h4>
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

            <div className="filter-box">
              <label>Form of employment</label>
              <select
                value={selectedEmployment}
                onChange={handleEmploymentChange}
              >
                <option value="">Any</option>
                <option value={"Office"}>Office</option>
                <option value={"Remote"}>Remote</option>
                <option value={"Mixed"}>Mixed</option>
              </select>
            </div>
            <div className="filter-box">
              <label>Expected work experience</label>
              <select
                value={selectedExperience}
                onChange={handleExperienceChange}
              >
                <option value="">Any</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5+</option>
              </select>
            </div>
            <div className="filter-box">
              <label>Expected english level</label>
              <select value={selectedEnglish} onChange={handleEnglishChange}>
                <option value="">Any</option>
                <option>Beginner</option>
                <option>Intermediate</option>
                <option>Advanced</option>
                <option>Proficient</option>
              </select>
            </div>

            <div className="filter-box">
              <div>
                <label htmlFor="minSalary">Min salary:</label>
                <input
                  min={1}
                  id="minSalary"
                  type="number"
                  value={minSalary}
                  onChange={handleMinSalaryChange}
                />
                <br />
                <label htmlFor="maxSalary">Max salary:</label>
                <input
                  max={999999}
                  id="maxSalary"
                  type="number"
                  value={maxSalary}
                  onChange={handleMaxSalaryChange}
                />
              </div>
            </div>

            <button className="reset-filters-btn" onClick={handleResetFilter}>
              Reset filters
            </button>
          </div>
        </div>
      </section>
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

export default VacanciesPage;
