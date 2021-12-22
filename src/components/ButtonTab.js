import React from "react";
import Button from "./Buttons";

function ButtonTab(props){
  //button-container that has all the buttons
    return (
      <div className="button-tab">
        <div className="button-container">
          <Button handleClick={props.handleClick}/>
        </div>
      </div>
    );
  }
export default ButtonTab;


