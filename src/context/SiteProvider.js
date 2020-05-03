import React, { Component } from "react";
import SiteContext from "./SiteContext";

class SiteProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Gabriel",
      email: "g",
    };
  }

  goHome = () => {
    window.location.href = "/";
  };

  handleInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const context = {
      state: this.state,
      handleInput: this.handleInput,
      goHome: this.goHome,
    };

    console.log(context.state);

    return (
      <SiteContext.Provider value={context}>
        {this.props.children}
      </SiteContext.Provider>
    );
  }
}

export default SiteProvider;
