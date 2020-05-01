import React, { Component, Fragment } from "react";
import InputBox from "../InputBox";
import Button from "../Button";
import * as S from "./style";

class Form extends Component {
  render() {
    const inputs = [];
    for (let i = 0; i < this.props.inputs; i++) {
      inputs.push(
        <InputBox key={i} placeholder={this.props.placeholders[i]} />
      );
    }

    return (
      <Fragment>
        <S.FormSubtitle>{this.props.formSubtitle}</S.FormSubtitle>
        <S.FormTitle>{this.props.formTitle}</S.FormTitle>
        <S.InputGroup>{inputs}</S.InputGroup>
        <Button text="Começe já" />
      </Fragment>
    );
  }
}

export default Form;
