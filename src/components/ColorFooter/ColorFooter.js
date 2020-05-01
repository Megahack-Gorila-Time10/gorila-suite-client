import React, { Component } from "react";
import Logo from "../Logo";
import Button from "../Button";
import * as S from "./Style";

const ColorFooter = (props) => {
  return (
    <S.Footer>
      <S.PlaceLogo>
        <Logo />
      </S.PlaceLogo>
      {props.btnText ? (
        <S.PlaceBtn>
          <Button text={props.btnText} />
        </S.PlaceBtn>
      ) : null}
      <S.Line />
    </S.Footer>
  );
};

export default ColorFooter;
