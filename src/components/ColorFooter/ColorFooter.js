import React, { Component } from "react";
import Logo from "../Logo";
import Button from "../Button";
import * as S from "./style";


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
              handleClick={this.props.handleNextQuestion}
            />
          </S.PlaceBtn>
        ) : null}
        <S.Line />
      </S.Footer>
    );
  }
}



export default ColorFooter;
