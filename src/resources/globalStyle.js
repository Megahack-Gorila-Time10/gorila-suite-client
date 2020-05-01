import styled from "styled-components";

const fullPageWrapper = styled.div`
  min-height: calc(100vh - 210px);
`;

const Wrapper = styled.div`
  box-sizing: content-box;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 40px;
  padding-right: 40px;

  @media (max-width: 960px) {
    padding-left: 30px;
    padding-right: 30px;
  }

  @media (max-width: 640px) {
    padding-left: 15px;
    padding-right: 15px;
  }
`;

export { fullPageWrapper, Wrapper };
