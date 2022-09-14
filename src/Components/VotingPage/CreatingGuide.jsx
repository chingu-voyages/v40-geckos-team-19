import "./CreatingGuide.css";
import { motion } from "framer-motion";

export default function CreatingGuide(props) {
  return (
    <div className="guideContainer">
      {props.step === 3 ? (
        <div className="guideStepsCounterText">
          Congratulations! You made your voting page.
        </div>
      ) : (
        <div className="guideStepsCounterText">
          You have {3 - props.step} easy step{props.step === 2 ? "" : "s"} to
          create your voting page:
        </div>
      )}
      {props.step === 1 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="guideStep1Conrtainer"
        >
          <div className="guideStepsTitle">Step1</div>
          <ul className="guideStepsList">
            <li>
              Select your designs by Drag and Drop or clicking on the left
              boxes.
            </li>
          </ul>
        </motion.div>
      )}
      {props.step === 2 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="guideStep2Conrtainer"
        >
          <div className="guideStepsTitle">Step2</div>
          <ul className="guideStepsList">
            <li>
              We are now in preview mode. You can see how your designs will be
              shown on the voting page.
            </li>
            <li>In this step, you can even change your designs.</li>
            <li>
              When everything looks good just click on the "Upload Designs" and
              wait until the designs uploading completes...
            </li>
          </ul>
        </motion.div>
      )}
      {props.step === 3 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="guideStep3Conrtainer"
        >
          <div className="guideStepsTitle">Step3</div>
          <ul className="guideStepsList">
            <li>Now you have your own vote page.</li>
            <li>You can go to the page by clicking on the arrow.</li>
            <li>Or copy your page URL.</li>
            <li>
              Don't forget to share the page where ever you can to make more
              contributors.
            </li>
          </ul>
        </motion.div>
      )}
    </div>
  );
}
