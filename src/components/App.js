import React from "react";
import ButtonTab from "./ButtonTab";
import OutputScreen from "./OutputScreen ";

class App extends React.Component {
  //adding states
  constructor(){
    super();

    this.state={
      display:"",
    }

    this.handleClickButton= this.handleClickButton.bind(this);
  }

  //handles all onclick events
  handleClickButton(event){
    const value= event.target.value;
    switch(value){

      case '=':{
        if(this.state.display!==""){
          var ans="";
          try{
            ans= eval(this.state.display);
          }
          catch(err){
            this.setState({display:"Math Error"});
          }
          if(ans=== undefined){
            this.setState({display:"Math Error"});
          }
          else{
            this.setState({display: ans});
          }
        }
        break;
      }
      case 'Clear':{
        this.setState({display:""});
        break;
      }
      case 'Delete': {
        var s = this.state.display;
        s = s.substring(0,s.length-1);
        this.setState({display: s});
        break;
      }
      default:{
        this.setState({ display: this.state.display += value})
        break;
      }
    }
  }
//main app component that has display screen and buttons
  render() {
    return (
      <div className="App">
        <OutputScreen display={this.state.display}/>
        <ButtonTab handleClick={this.handleClickButton}/>
      </div>
    );
  }
}
export default App;

