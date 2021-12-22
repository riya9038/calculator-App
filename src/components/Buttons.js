import React from "react";
// import $ from 'jquery';

function Button(props){
  //all individual buttons with onclick eventlisteners attached 
    return (
      <div style={{ display: "flex", flexWrap: "wrap" }} className="buttons">
        <input type="button" value='Clear' className="button" onClick={props.handleClick} ></input>
        <input type="button" value='Delete'className="button" onClick={props.handleClick} ></input>
        <input type="button" value='%' className="button" onClick={props.handleClick} ></input>
        <input type="button" value='/' className="operators" onClick={props.handleClick} ></input>
        <input type="button" value='7' className="button" onClick={props.handleClick} ></input>
        <input type="button" value='8' className="button" onClick={props.handleClick} ></input>
        <input type="button" value='9' className="button" onClick={props.handleClick} ></input>
        <input type="button" value='*' className="operators" onClick={props.handleClick} ></input>
        <input type="button" value='4' className="button" onClick={props.handleClick} ></input>
        <input type="button" value='5' className="button" onClick={props.handleClick} ></input>
        <input type="button" value='6' className="button" onClick={props.handleClick} ></input>
        <input type="button" value='-' className="operators" onClick={props.handleClick} ></input>
        <input type="button" value='1' className="button" onClick={props.handleClick} ></input>
        <input type="button" value='2' className="button" onClick={props.handleClick} ></input>
        <input type="button" value='3' className="button" onClick={props.handleClick} ></input>
        <input type="button" value='+' className="operators" onClick={props.handleClick} ></input>
        <input type="button" value='0' className="largeBtn" onClick={props.handleClick} ></input>
        <input type="button" value='.' className="largeBtn" onClick={props.handleClick} ></input>
        <input type="button" value='=' className="operators" onClick={props.handleClick} ></input>
        
      </div>
    );
}
export default Button;

