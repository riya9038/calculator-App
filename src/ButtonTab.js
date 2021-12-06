import React from "react";
import Buttons from "./Buttons";

class ButtonTab extends React.Component {
  render() {
    return (
      <div className="button-tab">
        <div style={styles.container} className="button-container">
          <Buttons />
        </div>
      </div>
    );
  }
}
export default ButtonTab;

const styles = {
  container: {
    width: 500,
    height: 500,
    marginLeft: 500,
    background: "black",
    display: "flex",
  },
};
