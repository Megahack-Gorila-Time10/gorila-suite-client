import styled from "styled-components";
import * as colors from "../../resources/colors";

const Line = styled.div`
  height: 12px;
  width: 100%;
  background-image: linear-gradient(${colors.greenGradient});
  position: absolute;
  bottom: 0px;
`;

const Footer = styled.div`
  height: 94px;
  padding-top: 6px;
  position: relative;
  display: flex;
  justify-content: center;
`;

const PlaceLogo = styled.div`
  background-image: url(/img/png/power.png);
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  width: 340px;
`;

const Name = styled.div`
  font-weight: 800;
  font-size: 39px;
  line-height: 48px;
  color: ${colors.darkGrey};
`;

const Headline = styled.div`
  color: ${colors.darkGrey};
  font-size: 30px;
  line-height: 37px;
  margin: 0 0 22px 0;
`;

const Phone = styled.div`
  color: ${colors.darkGrey};
  font-weight: 800;
  font-size: 26px;
  line-height: 37px;
`;
const Email = styled.div`
  color: ${colors.darkGrey};
  font-size: 30px;
  line-height: 37px;
`;

export { Footer, Line, PlaceLogo, Name, Headline, Phone, Email };
