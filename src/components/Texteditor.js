import React, {useState} from 'react';

export default function Texteditor( props) {
    const Uppercase =()=>{
        let txts = text.toUpperCase();
        updateText( txts );
    }
    const Lowercase =()=>{
        let txts = text.toLowerCase();
        updateText( txts );
    }

    const TitleCase =()=>{
      let txts = text.toLowerCase().replace(/\b\w/g, s => s.toUpperCase());
      updateText( txts );
  }


    const handleChange =(event)=>{
        updateText(event.target.value);
    }

    const ClearBtn =()=>{
        updateText('');
    }
    const Reverse =()=>{
      updateText(text.split('').reverse().join(''))
    }

    const handlRemoveSymbol =()=>{
      const regex = /[0-9/A-Z/a-z/ /]/g;
      const letters = text.match(regex);
      const clean = letters.join('');
      updateText(clean)

    }
    const handlRemovenumber =()=>{
      const regex = /[0-9/]/g;
      const digits  = text.match(regex);
      const clean = digits.join("");
      updateText(clean)

    }

    
    const [text, updateText] = useState("Write here what you want to capitalize");
  return (
    <React.Fragment>
   <div className="container">
     <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">{props.title}</label>
        <textarea className="form-control" id="exampleFormControlTextarea1" rows="10" value={text} onChange={handleChange}></textarea>
        <button className="btn btn-primary my-3" onClick={Uppercase}> Uppercase</button>
        <button className="btn btn-primary my-3 mx-3" onClick={Lowercase}> Lowercase</button>
        <button className="btn btn-primary my-3" onClick={TitleCase}>Titlecase</button>
        <button className="btn btn-primary my-3 mx-3" onClick={handlRemoveSymbol }>Remove Symbol</button>
        <button className="btn btn-primary my-3" onClick={handlRemovenumber }>Extract Number</button>
        <button className="btn btn-primary my-3 mx-3" onClick={Reverse}>Reverse</button>
        <button className="btn btn-primary my-3" onClick={ClearBtn}>Clear</button>
      </div>
   </div>
   <div className="container">
    <h3>Your sentence summary</h3>
    <h6>{text.split(" ").length} words and {text.length} characters</h6>
    <p>{0.008 * text.split(" ").length} minutes need to read.</p>

    <h3>Preview:</h3>
    <p>{text}</p>
   </div> 
   </React.Fragment>
  )
}
