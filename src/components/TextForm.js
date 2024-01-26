import React, { useState } from 'react';

export default function TextForm(props) {

    const [myStyle, setMyStyle] = useState({
        color: 'black',
        backgroundColor: 'white'
    });

    const [btntext, setBtnText] = useState("Enable Dark Mode");

    const toggleStyle = ()=>{
        if(myStyle.color === 'black'){
            setMyStyle(
                {
                    color: 'white',
                    backgroundColor: 'black',
                    border: '1px solid white'
                }
            );
            setBtnText("Enable Light Mode");
        }else{
            setMyStyle(
                {
                    color: 'black',
                    backgroundColor: 'white'
                }
            );
            setBtnText("Enable Dark Mode");
        }
    }

    const handleUpClick = () => {
        setText((prevText) => {
            console.log("UpperCase Was Clicked" + prevText);
            return prevText.toUpperCase();
        });
    }

    const handleLoClick = () => {
        setText((prevText) => {
            console.log("LowerCase Was Clicked" + prevText);
            return prevText.toLowerCase();
        });
    }

    const handleClearClick = () => {
        let nextText = '';
        setText(nextText);
    }

    const handleExtraSpacesClick = () => {
        let nextText = text.split(/[ ]+/);  // if any Space  OTHER THAN TWO SPACCING GAP SO you join from single spaace SO YOU 
        setText(nextText.join(" "));
    }

    const handleTextCopyClick = () => {
        let nextText = document.getElementById("myBox");
        nextText.select();
        navigator.clipboard.writeText(nextText.value);
    }

    const handleOnChange = (event) => {
        console.log("On Changed");
        setText(event.target.value);
    }

    const [text, setText] = useState(" ");

    return (
        <>
                <div className= "container my-4"  style={myStyle}>
                    <h1>{props.heading}</h1>
                    <textarea className="form-control" style={myStyle} id="myBox" value={text} onChange={handleOnChange} rows="6"></textarea><br />
                    <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
                    <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to LowerCase</button>
                    <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear The Text</button>
                    <button className="btn btn-primary mx-1" onClick={handleExtraSpacesClick}>Remove Extra Spaces</button>
                    <button className="btn btn-primary mx-1" onClick={handleTextCopyClick}>Copy The Text</button>
                    <button  onClick={toggleStyle} className='btn btn-primary'>{btntext}</button>
                </div>
                <div className="conatiner my-3 mx-3">
                    <h1>Your Text Summary</h1>
                    <p>{text.split(" ").length} Words and {text.length} Charaters</p>
                    <p>{0.008 * text.split(" ").length } Minutes Read</p>
                    <h3>Preview</h3>
                    <p>{text}</p>
                </div>
                </>
    )
}
