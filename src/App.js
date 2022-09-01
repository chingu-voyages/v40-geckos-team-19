import { Route, Router, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import LoginPage from "./Components/Login/LoginPage";
import RegisterPage from "./Components/Register/RegisterPage";
import VotingPage from "./Components/VotingPage/VotingPage.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" exact element={<HomePage />} />
      <Route path="/login" exact element={<LoginPage />} />
      <Route path="/register" exact element={<RegisterPage />} />
      <Route path="/voting" exact element={<VotingPage />} />
    </Routes>
  );
}

export default App;
