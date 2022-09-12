import React from "react";
import { motion } from "framer-motion";
import './Header.css'

const Header = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -180 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        ease: "easeInOut",
        duration: 1,
        delay: 0.3,
      }}
      className='header'>
      <div className='header-inner'>
        <nav className='nav'>
          <li>
          <a href='/login'>Login</a>  
          </li>
         
       
        <li className='title'>
          <a href='.'>WeDesign</a>
        </li>
      <li>
        <button className='btn'>
        <a href='/voting'>Create Poll</a>  </button>
        </li>
        </nav>
      </div>
    </motion.div>
  );
};

export default Header;