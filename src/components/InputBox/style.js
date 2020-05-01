import styled from "styled-components";
import * as colors from "../../resources/colors";

const Input = styled.input`
  border: 1px solid #ececec;
  box-sizing: border-box;
  border-radius: 10px;
  max-width: 500px;
  height: 50px;
  font-size: 21px;
  line-height: 26px;
  color: ${colors.darkGrey};
  font-family: Montserrat;
  font-weight: 300;
  margin: 8px 0;
`;

export { Input };
