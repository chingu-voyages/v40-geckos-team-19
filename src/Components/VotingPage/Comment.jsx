import styles from "./Comment.module.css";

export default function Comment(props) {
  // const commentDate = new Date(props.commentTime);
  console.log();
  return (
    <div className={styles.commentContainer}>
      <div className={styles.commentHeaderContainer}>
        <div className={styles.commentImageAndNameContainer}>
          <div className={styles.commenterImageContainer}>
            <img
              className={styles.commenterImage}
              src={props.commenterImage}
              alt=""
            />
          </div>
          <div className={styles.commenterName}>{props.commenterName}</div>
        </div>
        <div>{props.commentTime.toDate().toUTCString()}</div>
      </div>
      <div className={styles.commentText}>{props.comment}</div>
    </div>
  );
}
