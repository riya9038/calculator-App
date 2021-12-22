import React from "react";
// import ButtonTab from "./ButtonTab";

function OutputScreen(props){
  //display screen
    return (
      <div className="output-screen">
        <input type="text" value={props.display} className="screen"readOnly></input>
      </div>
    );
}
export default OutputScreen;

