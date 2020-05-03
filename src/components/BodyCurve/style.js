import styled from "styled-components";
import * as colors from "../../resources/colors";

const HeaderBG = styled.div`
  background-image: url(/img/svg/black.svg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom;
  width: 100%;
  height: 310px;
  position: relative;
  color: #ffffff;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 800;
  font-size: 39px;
  line-height: 48px;
`;

const TitleWrapper = styled.div`
  padding: 32px 0 0 26px;
  display: flex;
`;

const Title = styled.div`
  margin-right: 12px;
`;

const Name = styled.div`
  position: absolute;
  top: 34px;
  right: 40px;
  text-align: center;
`;

export { HeaderBG, Name, Title, TitleWrapper };


