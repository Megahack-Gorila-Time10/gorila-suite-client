import React, { Component } from "react";
import SuitabilityContext from "./SuitabilityContext";
import history from "../resources/history";
import server from "../resources/axios";
import { ML_PROFILE_URL } from "../resources/constants";

class SuitabilityProvider extends Component {
  constructor(props) {
    super(props);
    this.index = 0;
    this.questions = [
      {
        step: "1",
        denominator: "10",
        scaleLow: "Entediante",
        scaleHight: "Prazerosa",
        category: "Acompanhamento",
        question:
          "Quando se trata de gerenciar seus investimento, você acha isso uma tarefa:",
      },
      {
        step: "2",
        denominator: "10",
        scaleLow: "Esqueço até que tinha investido",
        scaleHight: "Verifico freneticamente para ver se mudou",
        category: "Acompanhamento",
        question:
          "Imagine que você tem acesso aos retornos dos investimentos no celular:",
      },
      {
        step: "3",
        denominator: "10",
        scaleLow: "Não sei nem por onde começar",
        scaleHight: "Sei bem o que eu quero",
        category: "Profundidade de conhecimentos",
        question:
          "Qual seu nível de confiança ao escolher ativos financeiros sozinho?",
      },
      {
        step: "4",
        denominator: "10",
        scaleLow: "Não entendo nada",
        scaleHight: "Entendo tudo sobre investimentos",
        category: "Profundidade de conhecimentos",
        question:
          "Como você classificaria seu nível de conhecimento sobre investimentos?",
      },
      {
        step: "5",
        denominator: "10",
        scaleLow: "Não possuo investimentos financeiros",
        scaleHight: "Invisto boa parte do meu patrimônio",
        category: "Profundidade de conhecimentos",
        question: "Sobre seus investimentos atuais:",
      },
      {
        step: "6",
        denominator: "10",
        scaleLow: "Querendo resgatar na hora",
        scaleHight: "Aproveito a queda para investir mais",
        category: "Reação a imprevistos",
        question:
          "Imagine que você fez um investimento há 1 mês e vê que seus rendimentos estão negativos. Qual a sua reação?",
      },
      {
        step: "7",
        denominator: "10",
        scaleLow: "Menores retornos - Menores chances de perda",
        scaleHight: "Maiores retornos - Maiores chances de perda",
        category: "Expectativa de retorno",
        question: "Em um possível novo investimento você procura:",
      },
      {
        step: "8",
        denominator: "10",
        scaleLow: "Impossível! Preciso acessar esse dinheiro na hora",
        scaleHight: "Sem problemas! Esse dinheiro é só para investir",
        category: "Necessidade de liquidez",
        question:
          "Se decidisse retirar o dinheiro do investimento e tivesse que esperar 30 dias úteis:",
      },
      {
        step: "9",
        denominator: "10",
        scaleLow: "5%",
        scaleHight: "95%",
        category: "Expectativa de retorno",
        question:
          "Qual porcentagem (%) do seu patrimônio total está disponível para investimentos financeiros? ",
      },
      {
        step: "10",
        denominator: "10",
        scaleLow: "O mais rápido o possível",
        scaleHight: "Não tenho problemas em esperar",
        category: "Visão de longo prazo",
        question:
          "Quero ver retornos significativos de um novo investimento financeiro:",
      },
    ];
    this.state = {
      name: "",
      email: "",
      currentSelect: 3,
      currentQuestion: this.questions[this.index],
      allRes: [],
      profileResult: {},
    };
  }

  goHome = () => {
    window.location.href = "/";
  };

  setCurrent = (value) => {
    this.setState({ currentSelect: value });
  };

  handleNextQuestion = () => {
    if (this.index < this.questions.length - 1) {
      let newAllRes = this.state.allRes;
      newAllRes.push(parseInt(this.state.currentSelect));
      this.index++;
      this.setState({
        allRes: newAllRes,
        currentQuestion: this.questions[this.index],
        currentSelect: 3,
      });
    } else {
      let newAllRes = this.state.allRes;
      newAllRes.push(parseInt(this.state.currentSelect));
      this.index++;
      this.setState({
        allRes: newAllRes,
      });
      server(ML_PROFILE_URL)
        .post("/predict", { answers: this.state.allRes })
        .then((res) => {
          console.log(res.data);
          const { description, title } = res.data;
          this.setState({
            profileResult: { description, title },
          });
          history.push("/suitability/perfil");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  handleInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    if (window.location.pathname !== "/" && this.state.name === "") {
      this.goHome();
    }

    const context = {
      state: this.state,
      handleNextQuestion: this.handleNextQuestion,
      setCurrent: this.setCurrent,
      handleInput: this.handleInput,
      goHome: this.goHome,
    };
    console.log(context.state);

    return (
      <SuitabilityContext.Provider value={context}>
        {this.props.children}
      </SuitabilityContext.Provider>
    );
  }
}

export default SuitabilityProvider;
