import styled from "styled-components";
import * as colors from "../../resources/colors";

const Btn = styled.div`
  color: #ffffff;
  text-align: center;
  font-weight: 800;
  font-size: 26px;
  background-image: linear-gradient(${colors.greenGradient});
  width: fit-content;
  min-width: 211px;
  height: 50px;
  padding: 6px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin: 8px 0;
  &:hover {
    background-image: linear-gradient(${colors.greenGradientInvert});
  }
`;

const BtnLG = styled.div`
  color: #ffffff;
  text-align: center;
  font-weight: 800;
  font-size: 26px;
  background-image: linear-gradient(${colors.greenGradient});
  width: fit-content;
  min-width: 224px;
  height: 70px;
  padding: 6px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin: 8px 0;
  &:hover {
    background-image: linear-gradient(${colors.greenGradientInvert});
  }
`;

export { Btn, BtnLG };
