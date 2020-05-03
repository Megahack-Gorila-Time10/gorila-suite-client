import React, { Component, Fragment } from "react";
import { Input } from "./style";

class InputBox extends Component {
  render() {
    return (
      <Fragment>
        <Input
          placeholder={this.props.placeholder}
          name={this.props.name}
          onChange={this.props.handleInput}
          autoComplete="off"
        />
      </Fragment>
    );
  }
}

export default InputBox;
