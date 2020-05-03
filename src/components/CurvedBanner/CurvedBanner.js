import React, { Component, Fragment } from "react";
import * as G from "../../resources/globalStyle";
import * as S from "./style";

class CurvedBanner extends Component {
  state = {};
  render() {
    return (
      <Fragment>
        <S.BannerBG>
          <G.Wrapper>
            <S.Title>{this.props.title}</S.Title>
            <S.Paragraph>{this.props.paragraph}</S.Paragraph>
          </G.Wrapper>
        </S.BannerBG>
      </Fragment>
    );
  }
}

export default CurvedBanner;
