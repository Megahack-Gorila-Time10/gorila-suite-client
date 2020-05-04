import styled from "styled-components";
import * as colors from "../../resources/colors";

const CardWrapper = styled.div`
  background: #ffffff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  width: 360px;
  height: 428px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  margin: 24px;
  position: relative;
  padding: 0 20px;
`;

const CardWrapperDis = styled.div`
  background: rgba(10, 10, 10, 0.79);
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  width: 100%;
  height: 100%;
  position: absolute;
`;

const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Info = styled.div`
  font-size: 22px;
  line-height: 27px;
  text-align: center;
  color: ${colors.darkGrey};
`;

const Title = styled.div`
  font-weight: 800;
  font-size: 39px;
  line-height: 48px;
  color: ${colors.darkGrey};
`;
const TitleDis = styled.div`
  font-weight: 800;
  font-size: 20px;
  line-height: 48px;
  color: #c4c4c4;
`;

export { CardWrapper, CardWrapperDis, Header, Info, Title, TitleDis };
