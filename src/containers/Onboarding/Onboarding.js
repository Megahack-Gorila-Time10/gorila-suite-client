import React, { Component, Fragment } from "react";
import {
  Header,
  ColorFooter,
  OnBoardingTitle,
  TextArea,
  InputBox,
} from "../../components";
import * as G from "../../resources/globalStyle";
import * as S from "./style";
import SiteContext from "../../context/SiteContext";
import Fraction from "../../components/Fraction/Fraction";
import { Redirect } from "react-router-dom";

class Onboarding extends Component {
  componentDidMount = () => {
    if (this.context.state.name == "") {
      this.context.goHome();
    }
  };

  render() {
    if (this.context.state.redirect) {
      return <Redirect to={this.context.state.redirect} />;
    }
    return (
      <Fragment>
        <Header sectionTitle="Sites" name={this.context.state.name} />
        <G.Wrapper>
          <G.FullPageWrapper>
            <Fraction
              step={this.context.state.currentTitle[0]}
              denominator="5"
              category="Setup do site"
            />
            <OnBoardingTitle text={this.context.state.currentTitle[1]} />
            <S.Content>
              {this.context.index == 0 ? (
                <Fragment>
                  <S.LinkedInLogo /> <S.Text>Em breve</S.Text>
                </Fragment>
              ) : (
                <Fragment>
                  {this.context.state.currentTitle.length > 3 && (
                    <InputBox
                      placeholder={this.context.state.currentTitle[3]}
                      name={this.context.state.currentTitle[4]}
                      handleInput={this.context.handleInput}
                      error={this.context.state.error}
                    />
                  )}
                  {this.context.state.currentTitle.length > 5 && (
                    <TextArea
                      placeholder={this.context.state.currentTitle[5]}
                      name={this.context.state.currentTitle[6]}
                      handleInput={this.context.handleInput}
                      error={this.context.state.error}
                    />
                  )}
                  {this.context.index === 4 && (
                    <p>
                      {window.location.origin}/sites/
                      {this.context.state.username}
                    </p>
                  )}
                </Fragment>
              )}
            </S.Content>
          </G.FullPageWrapper>
        </G.Wrapper>
        <ColorFooter
          btnText={this.context.state.currentTitle[2]}
          handleNextQuestion={this.context.handleNextQuestion}
        />
      </Fragment>
    );
  }
}

Onboarding.contextType = SiteContext;

export default Onboarding;
