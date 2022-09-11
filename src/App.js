import { useContext } from "react";
import { Route, Router, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import LoginPage from "./Components/Login/LoginPage";
import RegisterPage from "./Components/Register/RegisterPage";
import VotingPage from "./Components/VotingPage/VotingPage.jsx";
import AuthContext from "./store/auth-context";

function App() {
  const authCtx = useContext(AuthContext);

  return (
    <Routes>
      <Route path="/" exact element={<HomePage />} />
      {/* {!authCtx.isLoggedIn && ( */}
      <Route path="/login" exact element={<LoginPage />} />
      {/* )} */}
      {/* {!authCtx.isLoggedIn && ( */}
      <Route path="/register" exact element={<RegisterPage />} />
      {/* )} */}
      {authCtx.isLoggedIn && (
        <Route path="/voting" exact element={<VotingPage />} />
      )}
      <Route path="/voting/:pageUrl" element={<VotingPage />} />
    </Routes>
  );
}

export default App;
