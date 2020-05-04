import React, { Component } from "react";
import * as S from "./style";

class Button extends Component {
  render() {
    return this.props.lg ? (
      !this.props.disable ? (
        <S.BtnLG onClick={this.props.handleClick}>{this.props.text}</S.BtnLG>
      ) : (
        <S.BtnLGDis>{this.props.text}</S.BtnLGDis>
      )
    ) : (
      <S.Btn onClick={this.props.handleClick}>{this.props.text}</S.Btn>
    );
  }
}

export default Button;
