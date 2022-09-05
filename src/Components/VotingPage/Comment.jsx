import "./Comment.css";

export default function Comment(props) {
  return (
    <div className="commentContainer">
      <div className="commenterImageContainer">
        <img
          className="commenterImage"
          src={props.commenterImage}
          alt=""
        />
      </div>
      <div>{props.commenterName}</div>
      <div>{props.comment}</div>
    </div>
  );
}
