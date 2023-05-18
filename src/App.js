import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./screens/MainPage";
import "./App.css";
import VacanciesPage from "./screens/VacanciesPage";
import SoloVacancyPage from "./screens/SoloVacancyPage";
import LoginPage from "./screens/LoginPage";
import RegisterPage from "./screens/RegisterPage";
import SavedVacnciesPage from "./screens/SavedVacnciesPage";

function App() {
  return (
    <div className="App">
      {/* <h1>Hello!</h1> */}
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/vacancies" element={<VacanciesPage />} />
          <Route path="/vacancies/:vacancy_id" element={<SoloVacancyPage />} />
          {/* <Route path="/vacancy/get/:vacancy_id" element={<SoloVacancyPage />} /> */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/saved" element={<SavedVacnciesPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
