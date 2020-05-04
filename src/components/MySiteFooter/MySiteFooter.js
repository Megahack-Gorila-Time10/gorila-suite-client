import React, { Component, Fragment } from "react";
import * as S from "./style";
import * as G from "../../resources/globalStyle";

class MySiteFooter extends Component {
  render() {
    return (
      <Fragment>
        <G.Wrapper>
          <S.Name>Gabriel</S.Name>
          <S.Headline>Vendas</S.Headline>
          <S.Phone>11 95492005</S.Phone>
          <S.Email>gaazsig@gmail.com</S.Email>
        </G.Wrapper>
        <S.Footer>
          <S.PlaceLogo />
          <S.Line />
        </S.Footer>
      </Fragment>
    );
  }
}

export default MySiteFooter;
