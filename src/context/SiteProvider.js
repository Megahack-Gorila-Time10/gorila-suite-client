import React, { Component } from "react";
import SiteContext from "./SiteContext";
import server from "../resources/axios";
import { SITES_DB } from "../resources/constants";

class SiteProvider extends Component {
  constructor(props) {
    super(props);
    this.index = 0;
    this.titles = [
      [
        1,
        "Preencha as informação principais com seu LinkedIn",
        "Preencher manualmente",
      ],
      [
        2,
        "Informação individuais",
        "Próximo",
        "Cargo",
        "headline",
        "Descrição",
        "description",
      ],
      [
        3,
        "Descreva sua experiência profissional",
        "Próximo",
        "Título",
        "information_title",
        "Descrição",
        "information_paragraph",
      ],
      [4, "Informações de contato", "Póximo", "Celular", "phone"],
      [
        5,
        "Crie um Username para seus clientes te encontrarem com facilidade",
        "Salvar",
        "Username",
        "username",
      ],
    ];
    this.state = {
      name: "",
      email: "",
      username: "",
      headline: "",
      description: "",
      information_title: "",
      information_paragraph: "",
      phone: "",
      currentTitle: this.titles[this.index],
      redirect: null,
      error: false,
    };
  }

  goHome = () => {
    window.location.href = "/";
  };

  handleInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  validInputs = () => {
    switch (this.index) {
      case 0:
        return true;
      case 1:
        if (this.state["headline"] !== "" && this.state.description !== "") {
          return true;
        } else {
          return false;
        }
      case 2:
        if (
          this.state["information_title"] !== "" &&
          this.state.information_paragraph !== ""
        ) {
          return true;
        } else {
          return false;
        }
      case 3:
        if (this.state.phone !== "") {
          return true;
        } else {
          return false;
        }

      default:
        break;
    }
  };

  getUserData = (user) => {
    server(SITES_DB)
      .post("/getData", {
        username: user,
      })
      .then((res) => {
        console.log(res.data);
        this.setState({
          name: res.data.name,
          email: res.data.email,
          username: res.data.username,
          headline: res.data.headline,
          description: res.data.description,
          information_title: res.data.information_title,
          information_paragraph: res.data.information_paragraph,
          phone: res.data.phone,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  handleNextQuestion = () => {
    if (!this.validInputs()) {
      this.setState({ error: true,)}
    }
    if (this.index < this.titles.length - 1 && this.validInputs()) {
      this.index++;
      this.setState({
        error: false,
        currentTitle: this.titles[this.index],
      });
      if (document.getElementsByTagName("input").length) {
        document.getElementsByTagName("input")[0].value = "";
      }
      if (document.getElementsByTagName("textarea").length) {
        document.getElementsByTagName("textarea")[0].value = "";
      }
    } else {
      server(SITES_DB)
        .post("/insertData", {
          username: this.state.username,
          name: this.state.name,
          phone: this.state.phone,
          email: this.state.email,
          headline: this.state.headline,
          description: this.state.description,
          information_title: this.state.information_title,
          information_paragraph: this.state.information_paragraph,
          color: "788EFF",
        })
        .then((res) => {
          console.log(res.data);
          this.setState({
            redirect: `/sites/${this.state.username}`,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  render() {
    const context = {
      state: this.state,
      index: this.index,
      handleInput: this.handleInput,
      goHome: this.goHome,
      handleNextQuestion: this.handleNextQuestion,
      getUserData: this.getUserData,
    };

    console.log(context.state);

    return (
      <SiteContext.Provider value={context}>
        {this.props.children}
      </SiteContext.Provider>
    );
  }
}

export default SiteProvider;
