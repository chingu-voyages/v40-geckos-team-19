import "./CommentsForm.css";
import { useState } from "react";

export default function CommentsForm(props) {
  const [formValue, setFormvalue] = useState("");
  const handleTextChange = (e) => {
    setFormvalue(e.target.value);
  };
  const handleFormSubmit = (event) => {
    event.preventDefault();
    props.sendComment(formValue);
    setFormvalue("");
  };
  return (
    <div className="commentsForm">
      
      <form onSubmit={handleFormSubmit}>
        <textarea
          className="commentsFormTextArea"
          value={formValue}
          onChange={(e) => handleTextChange(e)}
          rows="4"
        />
        <br />
        <input className="commentFormSendButton" type="submit" value="Send Comment" />
      </form>
    </div>
  );
}
