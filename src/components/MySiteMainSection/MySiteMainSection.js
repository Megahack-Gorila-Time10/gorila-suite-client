import React, { Component, Fragment } from "react";
import * as S from "./style";

class MySiteMainSection extends Component {
  state = {};
  render() {
    return (
      <Fragment>
        <S.Row>
          <S.ContentWrapper align="flex-end" padding="0 64px 0 0">
            <S.IconUp />
            <S.Title>{this.props.title1}</S.Title>
            <S.SubTitle>{this.props.subtitle1}</S.SubTitle>
            <S.Paragraph>{this.props.paragraph1}</S.Paragraph>
          </S.ContentWrapper>
          <S.ContentWrapper align="center">
            <S.Power1 />
          </S.ContentWrapper>
        </S.Row>
        <S.Row>
          <S.ContentWrapper align="center">
            <S.Power2 />
          </S.ContentWrapper>

          <S.ContentWrapper align="flex-start" padding="0 0 0 64px">
            <S.IconCircle />
            <S.Title>{this.props.title2}</S.Title>
            <S.SubTitle>{this.props.subtitle2}</S.SubTitle>
            <S.Paragraph>{this.props.paragraph2}</S.Paragraph>
          </S.ContentWrapper>
        </S.Row>
      </Fragment>
    );
  }
}

export default MySiteMainSection;
