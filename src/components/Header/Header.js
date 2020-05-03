import React, { Component } from "react";
import * as S from "./style";
import Logo from "../Logo";

class Header extends Component {
  goHome = () => {
    window.location.pathname = "/";
  };
  render() {
    return (
      <S.HeaderBG>
        <S.TitleWrapper>
          <S.Title>{this.props.sectionTitle}</S.Title>
          <Logo white handleClick={this.goHome} />
        </S.TitleWrapper>
        <S.Name>{this.props.name}</S.Name>
      </S.HeaderBG>
    );
  }
}

export default Header;
