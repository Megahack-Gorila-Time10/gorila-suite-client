import React, { Component, Fragment } from "react";
import {
  ColorFooter,
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

class MySite extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.titles = ["title1", "title2", "title3"];
    this.infos = ["title1", "title2", "title3"];
  }
  render() {
    return (
      <Fragment>
        <G.Wrapper>
          <Navbar name={this.context.state.name} />
          <StartNow
            name={this.context.state.name}
            headline={this.context.state.headline}
            description={this.context.state.description}
          />
        </G.Wrapper>
        <CurvedBanner
          title="Excelência por trás"
          paragraph="Quis accumsan at ultrices odio arcu. Tellus tincidunt tellus cursus ac eget nisl facilisi. Commodo sem neque, leo non. Amet duis duis nisl sit. Viverra at ut in tortor volutpat. Et morbi mauris dignissim porttitor tincidunt pellentesque diam. Natoque aliquam id eget massa faucibus nulla leo est ut. Augue ipsum quis augue ut."
        />
        <G.Wrapper>
          <MySiteMainSection
            title1="Sugestões totalmente personalizadas"
            subtitle1="Baseadas em seu perfil de investimento"
            paragraph1="Quis accumsan at ultrices odio arcu. Tellus tincidunt tellus cursus ac eget nisl facilisi. Commodo sem neque, leo non. Amet duis duis nisl sit. Viverra at ut in tortor volutpat. Et morbi mauris dignissim porttitor tincidunt pellentesque diam. Natoque aliquam id eget massa faucibus nulla leo est ut. Augue ipsum quis augue ut."
            title2="Monitore seus investimentos"
            subtitle2="Com comentários e sugestões personalizada"
            paragraph2="Quis accumsan at ultrices odio arcu. Tellus tincidunt tellus cursus ac eget nisl facilisi. Commodo sem neque, leo non. Amet duis duis nisl sit. Viverra at ut in tortor volutpat. Et morbi mauris dignissim porttitor tincidunt pellentesque diam. Natoque aliquam id eget massa faucibus nulla leo est ut. Augue ipsum quis augue ut."
          />
        </G.Wrapper>
        <ClientDepositions/>
        <MySiteFooter/>
      </Fragment>
    );
  }
}

MySite.contextType = SiteContext;

export default MySite;
