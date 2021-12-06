import React from "react";
import ButtonTab from "./ButtonTab";

class OutputScreen extends React.Component {
  render() {
    return (
      <div className="output-screen">
        <div style={styles.screen} className="screen"></div>
      </div>
    );
  }
}
export default OutputScreen;
const styles = {
  screen: {
    width: 500,
    height: 100,
    marginLeft: 500,
    marginTop: 50,
    background: "grey",
    borderRadius: 4,
  },
};
