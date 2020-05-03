import React, { Component } from "react";
import * as S from "./style";
import * as G from "../../resources/globalStyle";
import Logo from "../Logo";
import { DepoimentCard } from "../../components";

class CrossCurve extends Component {

  render() {
    return (
      <S.HeaderBG>
        <S.TitleWrapper>
          <S.Title>{this.props.sectionTitle}</S.Title>
        </S.TitleWrapper>
        <S.CardWrapper>
          <S.Cards>
              <DepoimentCard
                title={this.props.title[0]}
                info={this.props.info[0]}
              />
              <DepoimentCard
                title={this.props.title[1]}
                info={this.props.info[1]}
              />
              <DepoimentCard
                title={this.props.title[2]}
                info={this.props.info[2]}
              />
            </S.Cards>
          </S.CardWrapper>
      </S.HeaderBG>
    );
  }
}

export default CrossCurve;
