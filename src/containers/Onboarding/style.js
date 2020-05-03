import styled from "styled-components";

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 24px 0;
`;

const LinkedInLogo = styled.div`
  background-image: url(/img/svg/linkedin.svg);
  background-size: contain;
  background-position: center;
  width: 256px;
  height: 256px;
`;

const Text = styled.div`
  font-weight: 300;
  font-size: 21px;
  line-height: 26px;
  text-align: center;
`;

export { Content, LinkedInLogo, Text };
