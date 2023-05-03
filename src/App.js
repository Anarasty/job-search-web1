import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./screens/MainPage";
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <h1>Hello!</h1> */}
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
