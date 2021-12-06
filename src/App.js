import React from "react";
import ButtonTab from "./ButtonTab";
import OutputScreen from "./OutputScreen ";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <OutputScreen />
        <ButtonTab />
      </div>
    );
  }
}
export default App;

const styles = {};
