import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./screens/MainPage";
import "./App.css";
import VacanciesPage from "./screens/VacanciesPage";
import SoloVacancyPage from "./screens/SoloVacancyPage";

function App() {
  return (
    <div className="App">
      {/* <h1>Hello!</h1> */}
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/vacancies" element={<VacanciesPage />} />
          <Route path="/vacancies/:vacancy_id" element={<SoloVacancyPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
