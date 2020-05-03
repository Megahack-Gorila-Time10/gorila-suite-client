import styled from "styled-components";

const InfoWrapper = styled.div`
  width: 50%;
`;

const GorilaImg = styled.div`
  background-image: url(/img/png/gorila-res.png);
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  border: solid 4px ${(props) => props.color};
  border-radius: 50%;
  width: 88px;
  height: 88px;
`;

const Paragraph = styled.p`
  font-weight: 300;
  font-size: 20px;
  line-height: 24px;
`;

const ParagraphBold = styled.p`
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
`;

const Type = styled.div`
  font-weight: 800;
  font-size: 39px;
  line-height: 48px;
`;

export { GorilaImg, InfoWrapper, Paragraph, ParagraphBold, Type };
