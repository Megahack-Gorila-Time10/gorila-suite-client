import React, { Component } from "react";
import * as S from "./style";
import Logo from "../Logo";
import Button from "../Button";

class WhiteHeader extends Component {
  goHome = () => {
    window.location.pathname = "/";
  };
  render() {
    return (
      
      <S.HeaderBG>
        <S.TitleWrapper>
          <S.Title>{this.props.sectionTitle}</S.Title>
          <S.PlaceBtn>
          <S.Line />
            <Button
              text={this.props.btnText}
              handleClick={this.props.handleNextQuestion}
            />
          </S.PlaceBtn>
        </S.TitleWrapper>
        <S.Name>{this.props.name}</S.Name>
      </S.HeaderBG>
      
    );
  }
}


export default WhiteHeader;

