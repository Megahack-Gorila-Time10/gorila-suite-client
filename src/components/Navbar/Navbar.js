import React, { Component } from "react";
import * as S from "./style";
import * as colors from "../../resources/colors"

class Navbar extends Component {
  state = {};
  render() {
    return (
      <S.Nav>
        <S.NavItem color="#F7C630">{this.props.name}</S.NavItem>
        <S.NavItem color={colors.darkGrey}>Corretora</S.NavItem>
        <S.NavItem color={colors.darkGrey}>Diferenciais</S.NavItem>
        <S.NavItem color={colors.darkGrey}>Depoimentos</S.NavItem>
      </S.Nav>
    );
  }
}

export default Navbar;
