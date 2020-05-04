import styled from "styled-components";

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const LoaderWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const LoadingText = styled.div`
  font-weight: 300;
  font-size: 21px;
  line-height: 26px;
  margin: 0 0 0 12px;
`;

export { Content, LoaderWrapper, LoadingText };
