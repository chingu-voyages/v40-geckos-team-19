import "./DesignModal.css";

export default function DesignModal(props) {
  const closeModal = () => {
    props.setModalState(false);
  };

  const handleVote = () => {
    if (props.selectedDesign == 1) {
      if (props.design1Voted) {
        props.unvoteDesign1();
        props.setDesign1Voted(false);
        props.setUserVoted(false);
      } else if (props.design2Voted) {
        props.unvoteDesign2();
        props.voteDesign1();
        props.setDesign1Voted(true);
        props.setDesign2Voted(false);
      } else {
        props.voteDesign1();
        props.setDesign1Voted(true);
        props.setUserVoted(true);
      }
    } else if (props.selectedDesign == 2) {
      if (props.design2Voted) {
        props.unvoteDesign2();
        props.setDesign2Voted(false);
        props.setUserVoted(false);
      } else if (props.design1Voted) {
        props.unvoteDesign1();
        props.voteDesign2();
        props.setDesign2Voted(true);
        props.setDesign1Voted(false);
      } else {
        props.voteDesign2();
        props.setDesign2Voted(true);
        props.setUserVoted(true);
      }
    }
  };

  return (
    <div className="designModalContainer">
      <div onClick={closeModal} className="modalCloseButton">
        X
      </div>
      <div className="designAndPreviewsContainer">
        <div className="modalDesign">
          <img
            className="modalDesignImage"
            src={
              props.selectedDesign == 1 ? props.design1Url : props.design2Url
            }
            alt=""
          />
          <div onClick={handleVote} className="modalThumbIconContainer">
            <svg
              className={
                (props.design1Voted & (props.selectedDesign == 1)) |
                (props.design2Voted & (props.selectedDesign == 2))
                  ? "modalThumbIconVoted"
                  : "modalThumbIconNotVoted"
              }
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
            </svg>
          </div>
        </div>
        <div className="modalSidebar">
          <div
            onClick={() => props.setSelectedDesign(1)}
            className={
              props.selectedDesign == 1
                ? "modalPreviewImageContainerActive"
                : "modalPreviewImageContainer"
            }
          >
            <img
              className="modalPreviewImage"
              src={props.design1Url}
              alt=""
            />
          </div>
          <div
            onClick={() => props.setSelectedDesign(2)}
            className={
              props.selectedDesign == 2
                ? "modalPreviewImageContainerActive"
                : "modalPreviewImageContainer"
            }
          >
            <img
              className="modalPreviewImage"
              src={props.design2Url}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
