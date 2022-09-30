import { Fragment, useContext } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import VotingPage from "./pages/VotingPage.jsx";
import Header from "./Components/Header/Header";
import NotFound from "./pages/NotFound";
import AuthContext from "./store/auth-context";

function App() {
  const authCtx = useContext(AuthContext);

  return (
    <Fragment>
      <Header />
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/login" exact element={<LoginPage />} />
        <Route path="/register" exact element={<RegisterPage />} />
        {authCtx.isLoggedIn && (
          <Route path="/voting" exact element={<VotingPage />} />
        )}
        <Route path="/voting/:pageUrl" element={<VotingPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Fragment>
  );
}

export default App;
