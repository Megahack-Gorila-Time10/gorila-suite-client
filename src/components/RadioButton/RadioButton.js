import React, { Component, Fragment } from "react";
import * as S from "./style";

const RadioButton = (props) => {
  return props.value == props.selected ? (
    <S.RadioBtnSelected
      onClick={() => {
        props.handleClick(props.value);
      }}
    />
  ) : (
    <S.RadioBtn
      onClick={() => {
        props.handleClick(props.value);
      }}
    />
  );
};

export default RadioButton;
