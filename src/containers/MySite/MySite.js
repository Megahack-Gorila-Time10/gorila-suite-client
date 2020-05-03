import React, { Component, Fragment } from "react";
import { ColorFooter, Navbar } from "../../components";
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
        <Navbar name={this.context.state.name}/>
      </Fragment>
    );
  }
}

MySite.contextType = SiteContext

export default MySite;
