import React, { Component } from "react";
import * as S from "./style";

class OnBoardingTitle extends Component {
  render() {
    return <S.Title>{this.props.text}</S.Title>
  }
}

export default OnBoardingTitle;
