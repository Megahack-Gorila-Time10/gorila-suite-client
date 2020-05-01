import styled from "styled-components";
import * as colors from "../../resources/colors";

const Btn = styled.div`
  color: #ffffff;
  font-weight: 800;
  font-size: 26px;
  background-image: linear-gradient(${colors.greenGradient});
  width: 211px;
  height: 50px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin: 8px;
  &:hover {
    background-image: linear-gradient(${colors.greenGradientInvert});
  }
`;

const BtnLG = styled.div`
  color: #ffffff;
  font-weight: 800;
  font-size: 26px;
  background-image: linear-gradient(${colors.greenGradient});
  width: 224px;
  height: 70px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin: 8px;
  &:hover {
    background-image: linear-gradient(${colors.greenGradientInvert});
  }
`;

export { Btn, BtnLG };
