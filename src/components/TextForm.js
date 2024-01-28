import React, { useState } from 'react';

export default function TextForm(props) {

    // const [myStyle, setMyStyle] = useState({
    //     color: 'black',
    //     backgroundColor: 'white'
    // });

    // const [btntext, setBtnText] = useState("Enable Dark Mode");

    // const toggleStyle = ()=>{
    //     if(myStyle.color === 'black'){
    //         setMyStyle(
    //             {
    //                 color: 'white',
    //                 backgroundColor: 'black',
    //                 border: '1px solid white'
    //             }
    //         );
    //         setBtnText("Enable Light Mode");
    //     }else{
    //         setMyStyle(
    //             {
    //                 color: 'black',
    //                 backgroundColor: 'white'
    //             }
    //         );
    //         setBtnText("Enable Dark Mode");
    //     }
    // }

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.ShowAlert("Converted to uppercase","success");
              
    }

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.ShowAlert("Converted to lowercase","success");
         
        
    }

    const handleClearClick = () => {
        let nextText = '';
        setText(nextText);
        props.ShowAlert("Clear text","success");
    }

    const handleExtraSpacesClick = () => {
        let nextText = text.split(/[ ]+/);  // if any Space  OTHER THAN TWO SPACCING GAP SO you join from single spaace SO YOU 
        setText(nextText.join(" "));
        props.ShowAlert("Remove extra spaces","success");
    }

    const handleTextCopyClick = () => {
        let nextText = document.getElementById("myBox");
        nextText.select();
        navigator.clipboard.writeText(nextText.value);
        props.ShowAlert("Text was copied","success");
    }

    const handleOnChange = (event) => {
        console.log("On Changed");
        setText(event.target.value);
    }

    const [text, setText] = useState(" ");

    return (
        <>
                <div className= "container my-4" style={{color: props.mode==='dark'?'white':'#042743'}} >
                    <h1>{props.heading}</h1>
                    <textarea className="form-control" style={{backgroundColor: props.mode==='dark'?'grey':'white',color: props.mode==='dark'?'white':'#042743'}} id="myBox" value={text} onChange={handleOnChange} rows="6"></textarea><br />
                    <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
                    <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to LowerCase</button>
                    <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear The Text</button>
                    <button className="btn btn-primary mx-1" onClick={handleExtraSpacesClick}>Remove Extra Spaces</button>
                    <button className="btn btn-primary mx-1" onClick={handleTextCopyClick}>Copy The Text</button>
                    {/* <button  onClick={toggleStyle} className='btn btn-primary'>{btntext}</button> */}
                </div>
                <div className="conatiner my-3 mx-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
                    <h1>Your Text Summary</h1>
                    <p>{text.split(" ").filter(Boolean).length} Words and {text.length} Charaters</p>
                    <p>{0.008 * text.split(" ").length } Minutes Read</p>
                    <h3>Preview</h3>
                    <p>{text.length>0?text:'Enter something in the textbox above to preview it here'}</p>
                </div>
                </>
    )
}
