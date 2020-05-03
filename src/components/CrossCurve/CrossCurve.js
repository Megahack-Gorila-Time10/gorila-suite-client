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
                title="-Matheus"
                info="Lorem Ipsum"
                router={this.props}
              />
              <DepoimentCard
                title="-Buniac"
                info="Lorem Ipsum"
                router={this.props}
              />
              <DepoimentCard
                title="-Gabe"
                info="Lorem Ipsum"
                router={this.props}
              />
            </S.Cards>
          </S.CardWrapper>
      </S.HeaderBG>
    );
  }
}

export default CrossCurve;
