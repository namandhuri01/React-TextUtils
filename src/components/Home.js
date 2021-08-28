import React, { useState } from 'react';


function Home(props) {
    const [text, setText] = useState('');
    const btndisabel = text.length===0 ? true : false;
    const handleUppercase= ()=>{
       let newtext = text.toUpperCase();
       setText(newtext);
       props.showAlert('Converted to uppercase','success');
    }
    const handleLowercase= ()=>{
        let newtext = text.toLowerCase();
        setText(newtext);
        props.showAlert('Converted to lowercase!','success');
    }
    const handleCapitilize= ()=>{
        var newtext = text.split(' ');  
        var CapitalizedWords = [];  
        newtext.forEach(element => {  
            CapitalizedWords.push(element[0].toUpperCase() + element.slice(1, element.length));  
        });  
        setText( CapitalizedWords.join(' '));
        props.showAlert('Text Capatilized!!','success');
    }
    const handleCopyToText= ()=>{
        navigator.clipboard.writeText(text); 
        props.showAlert("Copied to Clipboard!", "success");
    }
    const handleClearText= ()=>{
        let newtext = '';
        setText(newtext);
        props.showAlert('Text Cleared!','success');
    }
    const handleRemoveSpace= ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed!", "success");
    }
    const handleOnChange = (event)=>{
        setText(event.target.value) 
    }
    
  return (
    <>
        <div className="form-group mt-3">
            <label htmlFor="text-field" className="mb-3 h3" style={{color: props.mode==='dark'?'white':'#042743'}}>{props.heading}</label>
            <textarea className="form-control" id="text-field" rows="5" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color: props.mode==='dark'?'white':'#042743'}}></textarea>
        </div>
        <div className="mt-3">
            <button type="button" disabled={btndisabel} className="btn btn-primary mx-2" onClick={handleUppercase}>Uppercase All</button>
            <button type="button" disabled={btndisabel} className="btn btn-primary mx-2" onClick={handleLowercase}>Lowecase All</button>
            <button type="button" disabled={btndisabel} className="btn btn-primary mx-2" onClick={handleCapitilize}>Capitilize</button>
            <button type="button" disabled={btndisabel} className="btn btn-primary mx-2" onClick={handleCopyToText}>Copy Text</button>
            <button type="button" disabled={btndisabel} className="btn btn-primary mx-2" onClick={handleClearText}>Clear Text</button>
            <button type="button" disabled={btndisabel} className="btn btn-primary mx-2" onClick={handleRemoveSpace}>Remove Extra Spaces</button>
        </div>
        <div className="mt-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h3 >Your text summary</h3>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Character Count {text.length} Word Count</p>
            <p>{0.008 * text.split(' ').filter((element)=>{return element.length!==0}).length} Minutes Read</p>
            <p>Preview</p>
            <p>{text.length>0?text:"Nothing to preview!"}</p>
        </div>
    </>
  );
}

export default Home;
