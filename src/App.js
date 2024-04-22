import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import StartPage from "./pages/StartPage/StartPage";
import TutorPage from "./pages/TutorPage/TotorPage.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/tutor" element={<TutorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
