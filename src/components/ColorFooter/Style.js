import styled from "styled-components";
import * as colors from "../../resources/colors";

const Line = styled.div`
  height: 12px;
  margin-top: -12px;
  background-image: linear-gradient(${colors.greenGradient});
`;

export { Line };
