import React from "react";
import ReactDOM from "react-dom";

class OnSecondPageButton extends React.Component {
    onclick () {
      window.location.assign('http://localhost:3000/second/');
    }

    render() {
      return (
      <a 
      onClick={(e) => this.onclick(e)}>
          <i className="fas fa-chart-bar">

              </i>
        </a>
      );
    }
  }

export default OnSecondPageButton;