import styled from "styled-components";
import * as colors from "../../resources/colors";

const HeaderBG = styled.div`
  background-image: url(/img/svg/crossbay.svg);
  width: 100%;
  height: 990px;
  position: relative;
  color: #ffffff;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 800;
  font-size: 39px;
  line-height: 48px;
`;
const CardWrapper = styled.div`
  padding: 300px 0 0 150px;
  display: flex;
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

const Cards = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export { HeaderBG, Name, Title, TitleWrapper,Cards,CardWrapper };


