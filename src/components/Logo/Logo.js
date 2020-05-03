import React, { Component } from "react";
import * as S from "./style";

const Logo = (props) => {
  return props.white ? (
    <S.Gorila_W onClick={props.handleClick} />
  ) : (
    <S.Gorila onClick={props.handleClick} />
  );
};

export default Logo;
