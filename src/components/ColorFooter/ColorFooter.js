import React, { Component } from "react";
import Logo from "../Logo";
import Button from "../Button";
import * as S from "./Style";
import AppContext from "../../context/AppContext";

class ColorFooter extends Component {
  render() {
    return (
      <S.Footer>
        <S.PlaceLogo>
          <Logo />
        </S.PlaceLogo>
        {this.props.btnText ? (
          <S.PlaceBtn>
            <Button
              lg
              text={this.props.btnText}
              handleClick={this.context.handleNextQuestion}
            />
          </S.PlaceBtn>
        ) : null}
        <S.Line />
      </S.Footer>
    );
  }
}

ColorFooter.contextType = AppContext;

export default ColorFooter;
