import styled from "styled-components";

const BannerBG = styled.div`
  width: 100%;
  height: 596px;
  background-image: url(/img/svg/black-BG.svg);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  margin-top: 48px;
`;

const Title = styled.div`
  font-weight: 800;
  font-size: 25px;
  line-height: 30px;
  color: #ffffff;
  padding: 120px 0 24px 0;
`;

const Paragraph = styled.p`
  font-weight: 300;
  font-size: 19px;
  line-height: 23px;
  max-width: 400px;
  color: #ffffff;
  text-align: justify;
`;

export { BannerBG, Title, Paragraph };
