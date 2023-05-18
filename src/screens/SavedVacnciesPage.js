import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const SavedVacanciesPage = () => {
  const [savedVacancies, setSavedVacancies] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token');

    fetch(`http://localhost:8080/saved-vacancy/get-saved-vacancies?token=${token}`, {
      method: 'GET',
      headers: {
        accept: '*/*',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setSavedVacancies(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);


  //*TRY DELETE VAC
  const handleDeleteVacancy = (savedVacancyId) => {
    const token = localStorage.getItem('token');
    const apiUrl = `http://localhost:8080/saved-vacancy/delete/${savedVacancyId}?token=${token}`;
  
    fetch(apiUrl, { method: 'DELETE' })
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
  
  return (
    <div>
      <h2>Saved Vacancies</h2>
      {savedVacancies.length > 0 ? (
        savedVacancies.map((savedVacancy) => (
          <div key={savedVacancy.id} className="saved-vacancy">
            <Link to={`/vacancies/${savedVacancy.vacancy.vacancyId}`}>
              {savedVacancy.vacancy.vacancyName}
            </Link>
            <h1 className='delete-vac' onClick={() => handleDeleteVacancy(savedVacancy.id)}>
  <i className="fa-solid fa-trash"></i>
</h1>
          </div>
        ))
      ) : (
        <p>No saved vacancies</p>
      )}
    </div>
  );
};

export default SavedVacanciesPage;