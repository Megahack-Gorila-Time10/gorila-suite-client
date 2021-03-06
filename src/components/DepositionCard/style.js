import styled from "styled-components";
import * as colors from "../../resources/colors";

const CardWrapper = styled.div`
  background: #ffffff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  width: 350px;
  height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  margin: 24px;
  flex-shrink: 0;
  padding: 0 20px;

  position: relative;
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
  font-weight: 300;
  font-size: 20px;
  line-height: 48px;
  color: ${colors.darkGrey};
`;

const Aspas = styled.div`
  font-size: 174px;
  position: absolute;
  left: 12px; 
  top: -24px; 
`;

export { Aspas, CardWrapper, Header, Info, Title };
