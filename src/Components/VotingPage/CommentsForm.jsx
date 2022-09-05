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
    <div>
      <form onSubmit={handleFormSubmit}>
        <textarea
          value={formValue}
          onChange={(e) => handleTextChange(e)}
          cols="60"
          rows="4"
        />
        <br />
        <input type="submit" value="send comment" />
      </form>
    </div>
  );
}
