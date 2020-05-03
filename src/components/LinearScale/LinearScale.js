import React, { Component, Fragment } from "react";
import RadioButton from "../RadioButton/RadioButton";
import * as S from "./style";
import SuitabilityContext from "../../context/SuitabilityContext";
import Fraction from "../Fraction/Fraction";

class LinearScale extends Component {
  setSelected = (value) => {
    this.context.setCurrent(value);
  };

  render() {
    return (
      <Fragment>
        <S.VerticalAlign>
          <Fraction
            step={this.context.state.currentQuestion.step}
            denominator={this.context.state.currentQuestion.denominator}
            category={this.context.state.currentQuestion.category}
          />
          <S.Question>{this.context.state.currentQuestion.question}</S.Question>
          <S.Scale>
            <S.Measurement>
              {this.context.state.currentQuestion.scaleLow}
            </S.Measurement>
            <S.RadioBtns>
              <RadioButton
                value="1"
                selected={this.context.state.currentSelect}
                handleClick={this.setSelected}
              />
              <RadioButton
                value="2"
                selected={this.context.state.currentSelect}
                handleClick={this.setSelected}
              />
              <RadioButton
                value="3"
                selected={this.context.state.currentSelect}
                handleClick={this.setSelected}
              />
              <RadioButton
                value="4"
                selected={this.context.state.currentSelect}
                handleClick={this.setSelected}
              />
              <RadioButton
                value="5"
                selected={this.context.state.currentSelect}
                handleClick={this.setSelected}
              />
            </S.RadioBtns>
            <S.Measurement>
              {this.context.state.currentQuestion.scaleHight}
            </S.Measurement>
          </S.Scale>
        </S.VerticalAlign>
      </Fragment>
    );
  }
}

LinearScale.contextType = SuitabilityContext;

export default LinearScale;
