import React, { Component } from "react";
import * as S from "./style";

class Header extends Component {
  render() {
    return (
      <S.HeaderBG>
        <S.Title>
          {this.props.sectionTitle}
        </S.Title>
        <S.Name>
          {this.props.name}
        </S.Name>
      </S.HeaderBG>
      );
  }
}

export default Header;
