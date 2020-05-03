import React, { Component, Fragment } from "react";
import InputBox from "../InputBox";
import Button from "../Button";
import * as S from "./style";

class Form extends Component {
  formValidate = () => {
    if (this.props.currentName != "" && this.props.currentEmail != "") {
      this.props.router.history.push(this.props.nextPath);
    }
  };

  render() {
    const inputs = [];
    for (let i = 0; i < this.props.inputs; i++) {
      inputs.push(
        <InputBox
          key={i}
          placeholder={this.props.placeholders[i]}
          name={this.props.names[i]}
          handleInput={this.props.handleInput}
        />
      );
    }

    return (
      <Fragment>
        <S.FormSubtitle>{this.props.formSubtitle}</S.FormSubtitle>
        <S.FormTitle>{this.props.formTitle}</S.FormTitle>
        <S.InputGroup>{inputs}</S.InputGroup>
        <Button text="Começe já" handleClick={this.formValidate} />
      </Fragment>
    );
  }
}

export default Form;
