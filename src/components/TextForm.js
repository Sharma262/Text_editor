import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const handleClearClick = () => {
    let newText = "";
    setText(newText);
  };
  const handleFirstCap = () => {
      let newText = text.charAt(0).toUpperCase()+(text.substring(1));
      setText(newText);
  };
  return (
    <>
      <div className="container my-3">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            onChange={handleOnChange}
            rows="8"
            value={text}
          ></textarea>
          <button
            type="button"
            className="btn btn-primary mx-1 my-2"
            onClick={handleUpClick}
          >
            Covert To UpperCase
          </button>
          <button
            type="button"
            className="btn btn-primary mx-1 my-2"
            onClick={handleLoClick}
          >
            Covert To LowerCase
          </button>
          <button
            type="button"
            className="btn btn-primary mx-1 my-2"
            onClick={handleClearClick}
          >
            Clear Text
          </button>
          <button
            type="button"
            className="btn btn-primary mx-1 my-2"
            onClick={handleFirstCap}
          >
            First Char Cap
          </button>
        </div>
      </div>
      <div className="container my-3">
        <h1>Your text summary</h1>
        <p>
          {text.length > 0 ? text.split(" ").length : 0} words and {text.length} characters
        </p>
        <p>{text.length > 0 ?  0.008 * text.split(" ").length : 0} Minutes to read above content</p>
        <h1>{text.substring(1)}</h1>
        <h2>Preview</h2>
        <p>{text}</p>   
      </div>
    </>
  );
}
