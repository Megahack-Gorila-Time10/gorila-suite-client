import React, { Component, Fragment } from "react";
import RadioButton from "../RadioButton/RadioButton";
import * as S from "./style";
import AppContext from "../../context/AppContext";

class LinearScale extends Component {
  state = {
    scaleLow: "Discordo totalmente",
    scaleHight: "Concordo totalmente",
    question: "Se minhas ações caem 20% em um mês me sinto péssimo.",
    section: "visão de longo prazo",
    selected: 3,
    step: 1,
    denominator: 3,
  };
  setSelected = (value) => {
    this.setState({ selected: value });
    this.context.setCurrent(value);
    console.log(this.state.selected);
  };

  render() {
    return (
      <Fragment>
        <S.VerticalAlign>
          <S.Step>
            <S.CurrentStep> {this.state.step} </S.CurrentStep>
            <S.CurrentStepBar> / </S.CurrentStepBar>
            <S.CurrentStepDenominator>
              {this.state.denominator}
            </S.CurrentStepDenominator>
          </S.Step>
          <S.Section>{this.state.section}</S.Section>
          <S.GreenLine />
          <S.Question>{this.state.question}</S.Question>
          <S.Scale>
            <S.Measurement>{this.state.scaleLow}</S.Measurement>
            <S.RadioBtns>
              <RadioButton
                value="1"
                selected={this.state.selected}
                handleClick={this.setSelected}
              />
              <RadioButton
                value="2"
                selected={this.state.selected}
                handleClick={this.setSelected}
              />
              <RadioButton
                value="3"
                selected={this.state.selected}
                handleClick={this.setSelected}
              />
              <RadioButton
                value="4"
                selected={this.state.selected}
                handleClick={this.setSelected}
              />
              <RadioButton
                value="5"
                selected={this.state.selected}
                handleClick={this.setSelected}
              />
            </S.RadioBtns>
            <S.Measurement>{this.state.scaleHight}</S.Measurement>
          </S.Scale>
        </S.VerticalAlign>
      </Fragment>
    );
  }
}

LinearScale.contextType = AppContext;

export default LinearScale;
