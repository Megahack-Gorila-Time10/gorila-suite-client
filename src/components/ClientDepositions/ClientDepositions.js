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
                {this.props.deps.length && (
                  <Fragment>
                    <DepositionCard title={this.props.deps[0].name} info={this.props.deps[0].comment} />
                    <DepositionCard title={this.props.deps[1].name} info={this.props.deps[1].comment} />
                    <DepositionCard title={this.props.deps[2].name} info={this.props.deps[2].comment} />
                  </Fragment>
                )}
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
