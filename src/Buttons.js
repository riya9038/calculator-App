import React from "react";

class Buttons extends React.Component {
  render() {
    return (
      <div style={{ display: "flex", flexWrap: "wrap" }} className="buttons">
        <div style={styles.button} className="button">
          C
        </div>
        <div style={styles.button} className="button">
          +/-
        </div>
        <div style={styles.button} className="button">
          %
        </div>
        <div style={styles.operators} className="button">
          /
        </div>
        <div style={styles.button} className="button">
          7
        </div>
        <div style={styles.button} className="button">
          8
        </div>
        <div style={styles.button} className="button">
          9
        </div>
        <div style={styles.operators} className="button">
          *
        </div>
        <div style={styles.button} className="button">
          4
        </div>
        <div style={styles.button} className="button">
          5
        </div>
        <div style={styles.button} className="button">
          6
        </div>
        <div style={styles.operators} className="button">
          -
        </div>
        <div style={styles.button} className="button">
          1
        </div>
        <div style={styles.button} className="button">
          2
        </div>
        <div style={styles.button} className="button">
          3
        </div>
        <div style={styles.operators} className="button">
          +
        </div>
        <div style={styles.largeButton} className="button">
          0
        </div>
        <div style={styles.largeButton} className="button">
          .
        </div>
        <div style={styles.operators} className="button">
          =
        </div>
      </div>
    );
  }
}
export default Buttons;
const styles = {
  button: {
    width: 132,
    height: 98,
    background: "white",
    textAlign: "center",
    borderBottom: "1px solid black",
    borderLeft: "1px solid black",
  },
  largeButton: {
    width: 198.5,
    height: 98,
    background: "white",
    textAlign: "center",
    borderBottom: "1px solid black",
    borderLeft: "1px solid black",
  },
  operators: {
    width: 100,
    height: 98,
    background: "orange",
    textAlign: "center",
    borderBottom: "1px solid black",
    borderLeft: "1px solid black",
  },
};
