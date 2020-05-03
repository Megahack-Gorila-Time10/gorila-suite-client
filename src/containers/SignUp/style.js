import styled from "styled-components";

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const Illustration = styled.div`
  background-image: url(/img/png/site-illustration.png);
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  height: 213px;
  width: 615px;
`;

export { Content, Illustration };
