import React, { Component } from "react";
import AppContext from "./AppContext";

class AppProvider extends Component {
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
      <AppContext.Provider value={context}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

export default AppProvider;
