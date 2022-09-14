import "./UploadAnimation.css";
import { motion } from "framer-motion";
import { HiCloudUpload } from "react-icons/hi";

export default function UploadAnimation(props) {
  return (
    <div className="uploadAnimationContainer">
      <div className="animationContextContainer">
        <div className="uploadArrowImageContainer">
          <HiCloudUpload className="uploadArrowImage" />
        </div>
        <div className="textAndCirclesContainer">
          <div className="uploadingText">UPLOADING</div>
          <motion.div className="animatingCirclesContainer">
            <motion.div
              animate={{ opacity: 0 }}
              transition={{ repeat: Infinity, duration: 1 }}
              className="circleOne"
            ></motion.div>
            <motion.div
              animate={{ opacity: 0 }}
              transition={{ repeat: Infinity, duration: 1, delay: 0.25 }}
              className="circleTwo"
            ></motion.div>
            <motion.div
              animate={{ opacity: 0 }}
              transition={{ repeat: Infinity, duration: 1, delay: 0.5 }}
              className="circleThree"
            ></motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
