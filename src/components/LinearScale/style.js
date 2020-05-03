import styled from "styled-components";
import * as colors from "../../resources/colors";

const Measurement = styled.p`
  color: ${colors.darkGrey};
  font-weight: 300;
  font-size: 21px;
  line-height: 26px;
  margin: 024px;
  text-align: center;
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

const VerticalAlign = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export { Measurement, Question, RadioBtns, Scale, VerticalAlign };
