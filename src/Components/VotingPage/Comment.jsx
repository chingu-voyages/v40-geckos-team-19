import "./Comment.css";

export default function Comment(props) {
  return (
    <div className="commentContainer">
      <div className="commentHeaderContainer">
        <div className="commentImageAndNameContainer">
          <div className="commenterImageContainer">
            <img
              className="commenterImage"
              src={props.commenterImage}
              alt=""
            />
          </div>
          <div className="commenterName">{props.commenterName}</div>
        </div>
        <div>{props.commentTime.toDate().toUTCString()}</div>
      </div>
      <div className="commentText">{props.comment}</div>
    </div>
  );
}
