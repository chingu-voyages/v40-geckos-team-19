import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import AuthContext from "../../store/auth-context";
import "./Header.css";

const Header = () => {
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();

  function handleLogout(event) {
    event.preventDefault();
    if (authCtx.isLoggedIn) {
      authCtx.logout();
      navigate("/");
    } else {
      navigate("/login");
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: -180 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        ease: "easeInOut",
        duration: 1,
        delay: 0.3,
      }}
      className="header"
    >
      <div className="header-inner">
        <nav className="nav">
          <li>
            <NavLink onClick={handleLogout} to="/login">
              {authCtx.isLoggedIn ? "Logout" : "Login"}
            </NavLink>
          </li>

          <li className="title">
            <NavLink to="/">WeDesign</NavLink>
          </li>
          <li>
            {authCtx.isLoggedIn && (
              <button className="btn">
                <NavLink to="/voting">Create Poll</NavLink>
              </button>
            )}
          </li>
        </nav>
      </div>
    </motion.div>
  );
};

export default Header;
