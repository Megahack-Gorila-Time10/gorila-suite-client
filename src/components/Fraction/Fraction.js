import React, { Component, Fragment } from "react";
import * as S from "./style";

const Fraction = (props) => {
  return (
    <S.VAlign>
      <S.Step>
        <S.CurrentStep>{props.step}</S.CurrentStep>
        <S.CurrentStepBar> / </S.CurrentStepBar>
        <S.CurrentStepDenominator>{props.denominator}</S.CurrentStepDenominator>
      </S.Step>
      <S.Section>{props.category}</S.Section>
      <S.GreenLine />
    </S.VAlign>
  );
};

export default Fraction;
