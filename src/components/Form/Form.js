import React, { Component, Fragment } from "react";
import SuitabilityContext from "../../context/SuitabilityContext";
import InputBox from "../InputBox";
import Button from "../Button";
import * as S from "./style";

class Form extends Component {
  formValidate = () => {
    if (this.context.state.name != "" && this.context.state.email != "") {
      this.props.router.history.push("/perfil/suitability");
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
          handleInput={this.context.handleInput}
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

Form.contextType = SuitabilityContext;

export default Form;
