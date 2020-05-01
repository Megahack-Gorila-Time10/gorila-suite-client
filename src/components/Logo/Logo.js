import React, { Component } from "react";
import * as S from "./style";

const Logo = (props) => {
  return props.white ? <S.Gorila_W /> : <S.Gorila />;
};

export default Logo;
