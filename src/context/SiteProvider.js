import React, { Component } from "react";
import SiteContext from "./SiteContext";

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
        "job-title",
        "Descrição",
        "role",
      ],
      [
        3,
        "Descreva sua experiência profissional",
        "Próximo",
        "Título",
        "professional-experience",
        "Descrição",
        "achievements",
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
      name: "g",
      email: "g",
      username: "",
      ["job-title"]: "g",
      role: "g",
      ["professional-experience"]: "g",
      achievements: "g",
      phone: "9",
      currentTitle: this.titles[this.index],
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
        if (this.state["job-title"] !== "" && this.state.role !== "") {
          return true;
        } else {
          return false;
        }
      case 2:
        if (
          this.state["professional-experience"] !== "" &&
          this.state.achievements !== ""
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

  handleNextQuestion = () => {
    if (this.index < this.titles.length - 1 && this.validInputs()) {
      this.index++;
      this.setState({
        currentTitle: this.titles[this.index],
      });
      if (document.getElementsByTagName("input").length) {
        document.getElementsByTagName("input")[0].value = "";
      }
      if (document.getElementsByTagName("textarea").length) {
        document.getElementsByTagName("textarea")[0].value = "";
      }
    }
  };

  render() {
    const context = {
      state: this.state,
      index: this.index,
      handleInput: this.handleInput,
      goHome: this.goHome,
      handleNextQuestion: this.handleNextQuestion,
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
