import React, { Component, Fragment } from "react";
import { WhiteHeader, ColorFooter, Card,Button, BodyCurve,CrossCurve } from "../../components";
import * as G from "../../resources/globalStyle";
import * as S from "./style";

class UserSite extends Component {
  state = {};
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
        <CrossCurve/>

      
        <ColorFooter />
      </Fragment>

    );
  }
}

export default UserSite;
