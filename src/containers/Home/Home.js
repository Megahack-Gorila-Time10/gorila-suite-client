import React, { Component, Fragment } from "react";
import { Header, ColorFooter, Card } from "../../components";
import * as G from "../../resources/globalStyle";
import * as S from "./style";

class Home extends Component {
  state = {};
  render() {
    return (
      <Fragment>
        <Header />
        <G.Wrapper>
          <G.FullPageWrapper>
            <S.Cards>
              <Card
                title="Sites"
                btnText="monte sua página"
                info="Canal de aquisição Escale sua operação Melhore seu pitch member-get-member"
                to="/sites"
                router={this.props}
              />
              <Card
                title="Perfil"
                btnText="descubra seu perfil"
                info="Teste de Suitability Acompanhamento Personalização da jornada"
                to="/perfil"
                router={this.props}
              />
              <Card
                title="Automações"
                btnText="em breve"
                info="Envios automáticos Relatórios personalizados Flexibilidade de conteúdo Entrega valor na escala"
                to=""
                disable
              />
            </S.Cards>
          </G.FullPageWrapper>
        </G.Wrapper>
        <ColorFooter />
      </Fragment>
    );
  }
}

export default Home;
