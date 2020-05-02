import React, { Component, Fragment } from "react";
import SuitabilityContext from "../../context/SuitabilityContext";
import { Link } from "react-router-dom";
import InputBox from "../InputBox";
import Button from "../Button";
import * as S from "./style";

class Form extends Component {
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
        <Link to="/suitability">
          <Button text="Começe já" />
        </Link>
      </Fragment>
    );
  }
}

Form.contextType = SuitabilityContext;

export default Form;
