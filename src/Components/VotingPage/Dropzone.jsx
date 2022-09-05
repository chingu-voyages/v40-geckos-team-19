import "./Dropzone.css";
import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import ImageUpload from "../../images/image-upload-icon.svg";

export default function Dropzone(props) {
  const [firebaseImage, setFirebaseImage] = useState(null);
  const [imageLoaded, setImageLoaded] = useState(false);
  const isVotingPage = props.pagemode == "voting";

  const onDrop = useCallback((acceptedFiles) => {
    props.setdropimage(
      acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      )
    );
    props.setPreviewMode(true);
  }, []);

  const { getRootProps, getInputProps, acceptedFiles, isDragActive } =
    useDropzone({ onDrop });

  const showPreveiw = props.previewImage?.map((file) => (
    <div key={file.preview} className="previewImageContainer">
      <div className="previewNoteContainer">
        <div className="previewModeDot"></div>
        <div className="noteText">preview</div>
      </div>
      <img
        src={file.preview}
        style={{ maxWidth: "100%", height: "auto" }}
        alt=""
      />
    </div>
  ));

  const imageLoadHandle = () => {
    setImageLoaded(true);
  };

  const voteHandle = () => {
    if (props.voted) {
      props.unvote();
      props.votedState(false);
      props.setUserVoted(false);
    } else if (!props.userVoted) {
      props.vote();
      props.votedState(true);
      props.setUserVoted(true);
    }
  };

  const openModal = () => {
    props.setSelectedDesign(props.designNumber);
    props.setModalState(true);
  };

  const votingDesignElement = (
    <div className="realImageContainer">
      {!isVotingPage ? (
        <div
          className={
            imageLoaded ? "realNoteContainer" : "realNoteContainerHidden"
          }
        >
          <div className="votingModeDot"></div>
          <div className="noteText">voting</div>
        </div>
      ) : (
        ""
      )}
      <img
        onLoad={imageLoadHandle}
        src={props.firebaseImage}
        className={imageLoaded ? "imageLoaded" : "imagenotLoaded"}
        alt=""
      />
      {isVotingPage ? (
        <div
          onClick={voteHandle}
          style={
            imageLoaded ? { visibility: "visible" } : { visibility: "hidden" }
          }
          className="thumbIconContainer"
        >
          <svg
            className={props.voted ? "thumbIconVoted" : "thumbIconNotVoted"}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
          </svg>
        </div>
      ) : (
        ""
      )}
      {isVotingPage ? (
        <div
          onClick={openModal}
          style={
            imageLoaded ? { visibility: "visible" } : { visibility: "hidden" }
          }
          className="fullScreenModalButtonContainer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="fullScreenModalButtonImage"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
            />
          </svg>
        </div>
      ) : (
        ""
      )}
    </div>
  );

  const voteCounter = (
    <div
      style={
        props.userVoted ? { visibility: "visible" } : { visibility: "hidden" }
      }
      className="voteNumber"
    >
      {props.voteNumber} votes
    </div>
  );

  return (
    <div>
      <div className="dropzoneContainer">
        {!isVotingPage ? (
          <div
            {...getRootProps({
              className: isDragActive ? "dropzoneActive" : "dropzone",
            })}
          >
            <input {...getInputProps()} />
            <div className="dropzoneText">
              {props.firebaseImage ? (
                // <img style={{ width: "100%" }} src={props.firebaseImage} alt="" />
                votingDesignElement
              ) : props.preview ? (
                showPreveiw
              ) : (
                <div>
                  <img style={{ width: "100px" }} src={ImageUpload} alt="" />
                  <div>Upload Designe {props.designNumber}</div>
                  <div>Max Size: 5Mb</div>
                  <div>Best Aspect: 3:2</div>
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="dropzoneActive">
            <div className="dropzoneText">{votingDesignElement}</div>
          </div>
        )}
        {props.firebaseImage ? voteCounter : ""}
      </div>
    </div>
  );
}
