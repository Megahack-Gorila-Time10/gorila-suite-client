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

const Section = styled.div`
  font-weight: 300;
  font-size: 21px;
  line-height: 26px;
  text-align: center;
`;

const Step = styled.div`
  display: flex;
  justify-content: center;
`;

const VAlign = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export {
  CurrentStep,
  CurrentStepBar,
  CurrentStepDenominator,
  GreenLine,
  Section,
  Step,
  VAlign,
};
