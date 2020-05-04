import React, { Component, Fragment } from "react";
import * as S from "./style";

class InputBox extends Component {
  render() {
    return (
      <Fragment>
          {
            this.props.error ? (
              <S.InputError
                autoComplete="off"
                placeholder={this.props.placeholder}
                name={this.props.name}
                onChange={this.props.handleInput}
                value={this.props.value}
              />
            ) : (
              <S.Input
                autoComplete="off"
                placeholder={this.props.placeholder}
                name={this.props.name}
                onChange={this.props.handleInput}
                value={this.props.value}
              />
            )
          }
      </Fragment>
    );
  }
}

export default InputBox;
