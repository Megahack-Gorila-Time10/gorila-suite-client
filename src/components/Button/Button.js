import React, { Component } from "react";
import * as S from "./style";

class Button extends Component {
  render() {
    return this.props.lg ? <S.BtnLG>{this.props.text}</S.BtnLG> : <S.Btn>{this.props.text}</S.Btn>;
  }
}

export default Button;
