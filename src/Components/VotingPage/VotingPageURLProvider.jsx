import "./VotingPageURLProvider.css";
import { MdContentCopy, MdNorthEast } from "react-icons/md";
import { Link } from "react-router-dom";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { motion } from "framer-motion";

export default function VotingPageURLProvider(props) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ ease: "easeOut", duration: 0.3 }}
      className="votingPageURLProviderContainer"
    >
      <div className="mainPartTitle">Voting Page URL </div>
      <div className="URLProviderMainPartContainer">
        <div className="URLContainer">{window.location.href + "/" + props.generatedURL}</div>
        <div className="buttonsContainer">
          <Link
            className="goToPageButtonLinkContainer"
            to={"/voting/" + props.generatedURL}
          >
            <MdNorthEast className="goToPageIcon" />
          </Link>
          <CopyToClipboard
            text={window.location.href + "/" + props.generatedURL}
          >
            <div className="copyButton">
              <MdContentCopy className="copyIcon" />
            </div>
          </CopyToClipboard>
        </div>
      </div>
      <div className="socialShareContainer"></div>
    </motion.div>
  );
}
