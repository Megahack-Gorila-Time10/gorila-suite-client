import styled from "styled-components";
import * as colors from "../../resources/colors";

const HeaderBG = styled.div`
  background-image: url(/img/svg/green-gradient.svg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom;
  width: 100%;
  height: 210px;
  position: relative;

  color: #ffffff;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 800;
  font-size: 39px;
  line-height: 48px;
`;

const Title = styled.div`
  padding: 32px 0 0 26px;
`;

const Name = styled.div`
  position: absolute;
  top: 45px;
  right: 40px;
  text-align: center;
`;

export { HeaderBG, Name, Title };
