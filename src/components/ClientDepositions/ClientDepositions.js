import React, { Component, Fragment } from "react";
import * as G from "../../resources/globalStyle";
import * as S from "./style";
import DepositionCard from "../DepositionCard";
import Button from "../Button";

class ClientDepositions extends Component {
  state = {};
  render() {
    return (
      <Fragment>
        <S.BannerBG>
          <G.Wrapper>
            <S.VCenter>
              <S.Title>Depoimentos</S.Title>
              <S.Cards>
                <DepositionCard title="Gabe" info="Hollo World" />
                <DepositionCard title="Gabe" info="Hollo World" />
                <DepositionCard title="Gabe" info="Hollo World" />
              </S.Cards>
              <Button text="começe sua assessoria" />
            </S.VCenter>
          </G.Wrapper>
        </S.BannerBG>
      </Fragment>
    );
  }
}

export default ClientDepositions;
