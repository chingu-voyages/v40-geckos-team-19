import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import AuthContext from "../../store/auth-context";
import "./Header.css";

const Header = () => {
  const authCtx = useContext(AuthContext);

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
            <NavLink to="/login">Login</NavLink>
          </li>

          <li className="title">
            <NavLink to="/">WeDesign</NavLink>
          </li>
          <li>
            <button className="btn">
              <NavLink to={authCtx.isLoggedIn ? "/voting" : "/login"}>
                Create Poll
              </NavLink>
            </button>
          </li>
        </nav>
      </div>
    </motion.div>
  );
};

export default Header;
