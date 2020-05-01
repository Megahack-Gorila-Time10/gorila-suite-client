import React, { Component } from "react";
import AppContext from "./AppContext";

class AppProvider extends Component {
  state = {};

  render() {
    const context = {
      state: this.state,
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
