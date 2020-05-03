import React, { Component, Fragment } from "react";
import * as S from "./style";
import Button from "../Button";

class StartNow extends Component {
  state = {};
  render() {
    return (
      <Fragment>
        <S.Name>{this.props.name}</S.Name>
        <S.HeadLine>{this.props.headline}</S.HeadLine>
        <S.Description>{this.props.description}</S.Description>
        <Button text="começe sua assessoria"/>
      </Fragment>
    );
  }
}

export default StartNow;
