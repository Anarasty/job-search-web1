import React, { useEffect, useState } from "react";
import axios from "axios"; // Добавьте импорт axios

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

  return (
    <div>
      <h2>Applied Vacancies</h2>
      {appliedVacancies.length === 0 ? (
        <p>No vacancies</p>
      ) : (
        appliedVacancies.map((vacancy) => (
          <div key={vacancy.id}>
            <p>Vacancy ID: {vacancy.id}</p>
            <p>Feedback Description: {vacancy.feedbackDescription}</p>
            <p>Feedback Creation Date: {vacancy.feedbackCreationDate}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default ApplyPage;