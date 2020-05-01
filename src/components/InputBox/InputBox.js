import React, { Component, Fragment } from "react";
import { Input } from "./style";

class InputBox extends Component {
  render() {
    return (
      <Fragment>
        <Input placeholder={this.props.placeholder}/>
      </Fragment>
    );
  }
}

export default InputBox;
