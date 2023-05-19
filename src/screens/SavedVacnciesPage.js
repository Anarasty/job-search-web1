import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SavedVacanciesPage = () => {
  const [savedVacancies, setSavedVacancies] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");

    fetch(
      `http://localhost:8080/saved-vacancy/get-saved-vacancies?token=${token}`,
      {
        method: "GET",
        headers: {
          accept: "*/*",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setSavedVacancies(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  //*TRY DELETE VAC
  const handleDeleteVacancy = (savedVacancyId) => {
    const token = localStorage.getItem("token");
    const apiUrl = `http://localhost:8080/saved-vacancy/delete/${savedVacancyId}?token=${token}`;

    fetch(apiUrl, { method: "DELETE" })
      .then((response) => {
        if (response.ok) {
          // Обновление списка сохраненных вакансий после удаления
          const updatedVacancies = savedVacancies.filter(
            (savedVacancy) => savedVacancy.id !== savedVacancyId
          );
          setSavedVacancies(updatedVacancies);
        }
      })
      .catch((error) => console.error(error));
  };

  //!!!
  const token = localStorage.getItem("token");
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const [userName, setUserName] = useState(""); // Состояние для хранения имени и фамилии пользователя
  // Запрос на получение данных пользователя
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
    <div className="saved-vacancies-section">
      <nav>
        <div className="main-links">
          <Link className="logo" to="/">
            ITJF
          </Link>
          <Link to="/vacancies">Vacancies</Link>
          <Link to="/saved">Saved</Link>
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

      <div className="main-saved-sections">
        <h2>Saved Vacancies</h2>
        <div className="horizontal-line-med"></div>
        {savedVacancies.length > 0 ? (
          savedVacancies.map((savedVacancy) => (
            <div key={savedVacancy.id} className="saved-vacancy">
              <Link to={`/vacancies/${savedVacancy.vacancy.vacancyId}`}>
                {savedVacancy.vacancy.vacancyName}
              </Link>
              <h3>
                {savedVacancy.vacancy.salaryFrom}$-
                {savedVacancy.vacancy.salaryTo}$
              </h3>
              <h1
                className="delete-vac"
                onClick={() => handleDeleteVacancy(savedVacancy.id)}
              >
                <i className="fa-solid fa-trash"></i>
              </h1>
            </div>
          ))
        ) : (
          <p>No saved vacancies</p>
        )}
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

export default SavedVacanciesPage;
