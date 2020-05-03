import styled from "styled-components";
import * as colors from "../../resources/colors";

const Title = styled.div`
  font-weight: 800;
  font-size: 25px;
  line-height: 30px;
  color: ${colors.darkGrey};
`;

const SubTitle = styled.div`
  font-size: 22px;
  line-height: 27px;
  margin: 12px 0;
  color: ${colors.darkGrey};
`;

const Paragraph = styled.p`
  font-weight: 300;
  font-size: 16px;
  line-height: 20px;
  color: ${colors.darkGrey};
`;

const ContentWrapper = styled.div`
  align-items: ${(props) => props.align};
  padding: ${(props) => props.padding};
  display: flex;
  flex-direction: column;
  width: 50%;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 64px;
`;

const IconUp = styled.div`
  background-image: url(/img/png/icon-up.png);
  width: 50px;
  height: 50px;
  background-possition: center;
  background-repeat: no-repeat;
`;

const IconCircle = styled.div`
  background-image: url(/img/png/icon-circle.png);
  width: 50px;
  height: 50px;
  background-possition: center;
  background-repeat: no-repeat;
`;

const Power1 = styled.div`
  background-image: url(/img/png/power1.png);
  width: 587px;
  height: 312px;
  background-possition: center;
  background-repeat: no-repeat;
`;

const Power2 = styled.div`
  background-image: url(/img/png/power2.png);
  width: 381px;
  height: 416px;
  background-possition: center;
  background-repeat: no-repeat;
`;

export {
  Title,
  SubTitle,
  Paragraph,
  ContentWrapper,
  Row,
  IconCircle,
  IconUp,
  Power1,
  Power2,
};
