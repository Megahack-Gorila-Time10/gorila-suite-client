import React, { Component, Fragment } from "react";
import {
  Navbar,
  StartNow,
  CurvedBanner,
  MySiteMainSection,
  ClientDepositions,
  MySiteFooter,
} from "../../components";
import SiteContext from "../../context/SiteContext";
import * as G from "../../resources/globalStyle";
import * as S from "./style";
import Loader from "react-loader-spinner";

class MySite extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount = async () => {
    if (!this.context.state.newUser) {
      if (!this.context.state.username) {
        console.log(this.props.match.params.username);
        this.context.getUserData(this.props.match.params.username);
      }
    }
    this.context.getDepositions();
  };
  render() {
    return (
      <Fragment>
        {!this.context.state.db ? (
          <S.Center>
            <Loader type="Puff" color="#4CDE93" height={100} width={100} />
          </S.Center>
        ) : (
          <Fragment>
            <G.Wrapper>
              <Navbar name={this.context.state.name} />
              <StartNow
                name={this.context.state.name}
                headline={this.context.state.headline}
                description={this.context.state.description}
                router={this.props}
              />
            </G.Wrapper>
            <CurvedBanner
              title={this.context.state.information_title}
              paragraph={this.context.state.information_paragraph}
            />
            <G.Wrapper>
              <MySiteMainSection
                title1="Sugestões totalmente personalizadas"
                subtitle1="Baseadas em seu perfil de investimento"
                paragraph1="A nossa ferramenta de gestão de Perfis de investimento permite que o entregue sugesões assertivas que atendam as suas necessiades de investimento particulares."
                title2="Monitore seus investimentos"
                subtitle2="Com comentários e sugestões personalizada"
                paragraph2="Você poderá monitorar todos os seus investimentos em um único lugar! Com direito à comentários personalizados direcionados ao seu perfil. Sem enrolação nem SPAMs."
              />
            </G.Wrapper>

            <ClientDepositions deps={this.context.state.deps} router={this.props}/>
            <MySiteFooter
              name={this.context.state.name}
              headline={this.context.state.headline}
              phone={this.context.state.phone}
              email={this.context.state.email}
            />
          </Fragment>
        )}
      </Fragment>
    );
  }
}

MySite.contextType = SiteContext;

export default MySite;
