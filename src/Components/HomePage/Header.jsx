import React, { useContext } from "react";
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
            <a href="/login">Login</a>
          </li>

          <li className="title">
            <a href=".">WeDesign</a>
          </li>
          <li>
            <button className="btn">
              <a href={authCtx.isLoggedIn ? "/voting" : "/login"}>Create Poll</a>{" "}
            </button>
          </li>
        </nav>
      </div>
    </motion.div>
  );
};

export default Header;
