import React, { Component, Fragment } from "react";
import * as S from "./style";
import * as G from "../../resources/globalStyle";

class MySiteFooter extends Component {
  render() {
    return (
      <Fragment>
        <G.Wrapper>
          <S.Name>{this.props.name}</S.Name>
          <S.Headline>{this.props.headline}</S.Headline>
          <S.Phone>{this.props.phone}</S.Phone>
          <S.Email>{this.props.email}</S.Email>
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
