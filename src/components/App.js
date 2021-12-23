import React from "react";
import ButtonTab from "./ButtonTab";
import OutputScreen from "./OutputScreen ";
var operand1=0;
var operand2=null;
var operator=null;

class App extends React.Component {
  //adding states
  constructor(){
    super();

    this.state={
      display:"",
    }

    this.handleClickButton= this.handleClickButton.bind(this);
    this.isOperator= this.isOperator.bind(this);
  }

  isOperator(value){
    return value === "+" || value === "-" || value === "*" || value === "/";
  }
  //handles all onclick events
  handleClickButton(event){
    const value= event.target.value;
    var text = Number(this.state.display);
    
    if(this.isOperator(value))
		{
			operand1=Number(text);
			operator=value;
      var str = this.state.display;
      str = str.substring(str.length-1);
      if(str!=='+' && str!=='-' && str!== '*' && str!=='/')
			  this.setState({display: this.state.display + operator});
      else{
        this.setState({display: this.state.display + ''});
      }

		}
		else if(value==="Clear")
		{
			this.setState({display:""});
		}
		else if(value===".")
		{
			if(this.state.display.length && !this.state.display.includes('.'))
			{
				this.setState({display: this.state.display +'.'});
			}
		}
		else if(value==="%")
		{
			operand1=Number(text);
			operand1=operand1/100;
			this.setState({display:operand1}); 
		}
		else if(value==="Delete")
		{
			var s = this.state.display;
      s = s.substring(0,s.length-1);
      this.setState({display: s});

		}
		else if(value==="=")
		{
			operand2=Number(text);
			var result=eval(this.state.display);
      result= String(result);
			
      this.setState({display:result});
      operand1=0;
      operand2=null;
      operator=null;
		}
		else
		{
			this.setState({ display: this.state.display += value})
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

