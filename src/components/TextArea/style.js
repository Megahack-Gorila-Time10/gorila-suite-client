import styled from "styled-components";
import * as colors from "../../resources/colors";

const Input = styled.textarea`
  border: 1px solid #ececec;
  box-sizing: border-box;
  border-radius: 10px;
  width: 500px;
  height: 180px;
  font-size: 21px;
  line-height: 26px;
  color: ${colors.darkGrey};
  font-family: Montserrat;
  font-weight: 300;
  margin: 8px 0;
`;

const InputError = styled.textarea`
  border: 1px solid ${colors.softRed};
  box-sizing: border-box;
  border-radius: 10px;
  width: 500px;
  height: 180px;
  font-size: 21px;
  line-height: 26px;
  color: ${colors.darkGrey};
  font-family: Montserrat;
  font-weight: 300;
  margin: 8px 0;
`;

export { Input, InputError };
