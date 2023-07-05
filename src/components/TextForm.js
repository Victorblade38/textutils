import React,{useState} from 'react';

export default function TextForm(props) {
    const handleUpClick=()=>{
        //console.log("Uppercase was clicked:"+text);
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase!!!","success");
    }

    const handleClearClick=()=>{
        //console.log("Clear was clicked:"+text);
        let newText='';
        setText(newText);
        props.showAlert("Text cleared!!!","success");
    }

    const handleloClick=()=>{
        //console.log("Lowercase was clicked:"+text);
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase!!!","success");
    }

    const handleOnChange=(event)=>{
        //console.log("On Change");
        setText(event.target.value); //State update while changing the value

    }

    const[text,setText]=useState('');
    // text="new state"; //wrong way to change the state
    // setText("new state"); //Correct way to change the state

    return (
        <>
        <div className='container' style={{color:props.mode==='dark'?'white':'#333333'}}>
            <h1 >{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'#333333'}} id="exampleFormControlTextarea1" rows="8"></textarea> 
                {/* {{}} double curly braces for writing an object */}
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert Uppercase</button>
            <button className="btn btn-primary mx-1" onClick={handleloClick}>Convert Lowercase</button>
            <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear</button>
        </div>
        <div className="container my-3" style={{color:props.mode==='dark'?'white':'#333333'}}>
            <h1>Your text summary</h1>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008*text.split(" ").length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter Something to in the textbox above to preview if here"}</p>
        </div>
        </>
    )
}


//Hooks help u to use class features without using the class
//React doesnt watch all variables by default


//How to handle state
//state=text (above)