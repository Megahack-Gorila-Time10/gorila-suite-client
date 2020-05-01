import styled from "styled-components";
import * as colors from "../../resources/colors";

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const FormTitle = styled.div`
  font-weight: 800;
  font-size: 39px;
  line-height: 48px;
  margin: 8px;
  color: ${colors.darkGrey};
`;

const FormSubtitle = styled.div`
  font-weight: 300;
  font-size: 21px;
  line-height: 26px;
  margin: 8px;
  color: ${colors.darkGrey};
`;
export { FormSubtitle, FormTitle, InputGroup };
