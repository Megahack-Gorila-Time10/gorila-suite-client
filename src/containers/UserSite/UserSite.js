import React, { Component, Fragment } from "react";
import { WhiteHeader, ColorFooter, Card,Button, BodyCurve,CrossCurve } from "../../components";
import * as G from "../../resources/globalStyle";
import * as S from "./style";

class UserSite extends Component {
  constructor(props){
    super(props)
    this.state ={}
    this.titles=["title1","title2","title3"]
    this.infos=["title1","title2","title3"]
  }
  render() {
    return (
      <Fragment>
        <WhiteHeader/>
        <G.Wrapper>
        <Button
         text="Comece sua assesoria agora"
        />
        </G.Wrapper>
        <BodyCurve/>
        <G.Wrapper>
          <G.FullPageWrapper>
          </G.FullPageWrapper>
        </G.Wrapper>
        <CrossCurve
        title = {this.titles}
        info = {this.infos}
        />

      
        <ColorFooter />
      </Fragment>

    );
  }
}

export default UserSite;
