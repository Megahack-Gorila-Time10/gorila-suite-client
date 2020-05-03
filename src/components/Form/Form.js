import React, { Component, Fragment } from "react";
import InputBox from "../InputBox";
import Button from "../Button";
import * as S from "./style";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false
    };
  }
  formValidate = () => {
    let allFilled = true;
    this.props.currentValues.forEach(element => {
      if (element === ""){
        allFilled = false;
      }
    });

    if (allFilled){
      this.setState({error:false});
      this.props.router.history.push(this.props.nextPath);

    } else {
      this.setState({error:true});
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
          value={this.props.currentValues[i]}
          handleInput={this.props.handleInput}
          error={this.state.error}
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
