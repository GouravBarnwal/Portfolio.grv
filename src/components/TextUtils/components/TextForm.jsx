import React, { useState, useEffect } from "react";

export default function TextForm(props) {
    // Log when component mounts to verify it's being rendered
    useEffect(() => {
      console.log('TextForm component mounted');
    }, []);
    const handleUpClick = () => {
      console.log("UpperCase was clicked " + text);
      let txt = text.toUpperCase();
      setText(txt);
      props.showAlert("Converted to uppercase!", "success");
    };

    const handleLoClick = () => {
      console.log("LowerCase was clicked" + text);
      let txt = text.toLowerCase();
      setText(txt);
      props.showAlert("Converted to lowercase!", "success");
    };

    const handleReplaceClick = () => {
      console.log("Text replaced by / " + text);
      let txt = text.replaceAll(" ", "/");
      setText(txt);
      props.showAlert("Converted to uppercase!", "success");
    };

    const handleCopy = () => {
      console.log("Text Copied");
      navigator.clipboard.writeText(text);
      props.showAlert("Coppied to clipboard!", "success");
    };
    const handleExtraSpace = () => {
      console.log("Removes extra spaces");
      let txt = text.split(/[ ]+/);
      setText(txt.join(" "));
      props.showAlert("Extra space cleared!", "success");
    };

    const handleOnChange = (event) => {
      console.log("On change");
      setText(event.target.value);
    };

    const [text, setText] = useState("");
    return (
      <div className="textutils-main" style={{ color: props.mode === "dark" ? "white" : "black", position: 'relative', zIndex: 10 }}>
        <h1 className="mb-4" style={{textAlign: 'center'}}>{props.heading}</h1>
        <div className="mb-3" style={{width: '100%'}}>
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "#777777" : "white",
              color: props.mode === "dark" ? "white" : "black",
              position: 'relative',
              zIndex: 10
            }}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <div style={{width: '100%', display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
          <button disabled={text.length===0} className="btn btn-primary my-1 mx-2" onClick={handleUpClick}>
            Convert to Uppercase
          </button>
          <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>
            Convert to Lowercase
          </button>
          <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleReplaceClick}>
            Replace Text
          </button>
          <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleCopy}>
            Copy Text
          </button>
          <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleExtraSpace}>
            Remove Extra Space
          </button>
        </div>
        <div className="my-2" style={{width: '100%'}}>
          <h2>Your text summary</h2>
          <p>
            {text.split(/\s+/).filter((a1) =>{return a1.length!=0}).length} words and {text.length} characters
          </p>
          <p>{0.008 * text.split(" ").filter((a1) =>{return a1.length!=0}).length} Minutes read</p>
          <h2>Preview</h2>
          <p>
            {text.length > 0
              ? text
              : "Enter Something in the textbox above to preview"}
          </p>
        </div>
      </div>
    );
  }
