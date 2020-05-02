import styled from "styled-components";
import * as colors from "../../resources/colors";

const CurrentStep = styled.span`
  color: #12c1c5;
  font-weight: 800;
  font-size: 24px;
  line-height: 10px;
  `;
  
  const CurrentStepBar = styled.span`
  color: #12c1c5;
  font-size: 34px;
  `;
  
  const CurrentStepDenominator = styled.span`
  line-height: 66px;
  font-size: 24px;
`;

const GreenLine = styled.div`
  width: 100px;
  height: 2px;
  margin: 30px 0;
  background-image: linear-gradient(${colors.greenGradient});
`;

const Measurement = styled.p`
  color: ${colors.darkGrey};
  font-weight: 300;
  font-size: 21px;
  line-height: 26px;
  margin: 024px;
  text-align: center
`;

const Question = styled.div`
  color: ${colors.darkGrey};
  margin: 0 0 40px 0;
  max-width: 646px;
  font-weight: 800;
  font-size: 39px;
  line-height: 48px;
  text-align: center;
`;

const RadioBtns = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 546px;
  @media (max-width: 960px) {
    width: auto;
    flex-direction: column;
    height: 400px;
  }
`;

const Scale = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Section = styled.div`
  font-weight: 300;
  font-size: 21px;
  line-height: 26px;
  text-align: center;
`;

const Step = styled.div`
  display: flex;
`;

const VerticalAlign = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export {
  CurrentStep,
  CurrentStepBar,
  CurrentStepDenominator,
  GreenLine,
  Measurement,
  Question,
  RadioBtns,
  Scale,
  Section,
  Step,
  VerticalAlign,
};
