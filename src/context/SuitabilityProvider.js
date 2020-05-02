import React, { Component } from "react";
import SuitabilityContext from "./SuitabilityContext";

class SuitabilityProvider extends Component {
  state = {
    currentSelect: 3,
    allRes: [],
  };

  setCurrent = (value) => {
    this.setState({ currentSelect: value });
  };

  handleNextQuestion = () => {
    let newAllRes = this.state.allRes;
    newAllRes.push(this.currentSelect);
    this.setState({ allRes: newAllRes });
    console.log("funfa");
  };

  render() {
    const context = {
      state: this.state,
      handleNextQuestion: this.handleNextQuestion,
      setCurrent: this.setCurrent,
    };
    console.log(context.state);

    return (
      <SuitabilityContext.Provider value={context}>
        {this.props.children}
      </SuitabilityContext.Provider>
    );
  }
}

export default SuitabilityProvider;
