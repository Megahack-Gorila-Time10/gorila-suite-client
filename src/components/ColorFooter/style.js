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
`;

const PlaceBtn = styled.div`
  position: absolute;
  bottom: 34px;
  right: 40px;
`;

const PlaceLogo = styled.div`
  position: absolute;
  bottom: 34px;
  left: 15px;
`;

export { Footer, Line, PlaceBtn, PlaceLogo };
