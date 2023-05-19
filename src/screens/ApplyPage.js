import React, { useEffect, useState } from "react";
import axios from "axios"; // Добавьте импорт axios
import { Link, useNavigate } from "react-router-dom";

const ApplyPage = () => {
  const [appliedVacancies, setAppliedVacancies] = useState([]);
  const token = localStorage.getItem("token");
  useEffect(() => {
    // Загрузите данные о зааплаеных вакансиях с сервера при загрузке страницы
    axios
      .get(
        `http://localhost:8080/vacancy-feedback/get-all-vacancy-feedbacks?token=${token}`
      )
      .then((response) => {
        setAppliedVacancies(response.data);
      })
      .catch((error) => {
        console.error(error);
        // Обработка ошибок при загрузке данных
      });
  }, []);

  //sdjiusagfkuaSGFlief
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  //! USER
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


  // FORMAT date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear().toString();
    return `${day}.${month}.${year}`;
  };
  return (
    <div className="feedback-section-page">
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
                {/* <Link href="#">Log out</Link> */}
                <button onClick={handleLogout}>Log out</button>
              </li>
            </ul>
          )}
        </div>
      </nav>
      <div className="main-feedbacks">
        <h1 className="title">Applied Vacancies</h1>
        <div className="horizontal-line-med"></div>
        <div className="feeds">
          {appliedVacancies.length === 0 ? (
            <p>No vacancies</p>
          ) : (
            appliedVacancies.map((feedbackVac) => (
              <div key={feedbackVac.id} className="feed-container">
                <h1>{feedbackVac.vacancy.vacancyName}</h1>
                <h3>
                  Feedback Creation Date: {formatDate(feedbackVac.feedbackCreationDate)}
                </h3>
                <h3>
                  Download resume:
                  <a href={`${feedbackVac.userFile.userFileDownloadUrl}`}>
                    {feedbackVac.userFile.userFileName}
                  </a>
                </h3>
                <p>Feedback Description: {feedbackVac.feedbackDescription}</p>
              </div>
            ))
          )}
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

export default ApplyPage;
