import styled from "styled-components";
import * as colors from "../../resources/colors";

const Description = styled.div`
  max-width: 500px;
  font-weight: 300;
  font-size: 16px;
  line-height: 20px;
  margin-bottom: 68px;
  color: ${colors.darkGrey};
`;
const HeadLine = styled.div`
  max-width: 500px;
  font-size: 30px;
  line-height: 37px;
  display: flex;
  align-items: center;
  text-transform: upperCase;
  color: ${colors.darkGrey};
  margin: 24px 0;
`;

const Name = styled.div`
  max-width: 500px;
  font-weight: 800;
  font-size: 39px;
  line-height: 48px;
  margin: 24px 0;
  color: ${colors.darkGrey};
`;

export { Description, HeadLine, Name };
