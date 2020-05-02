import styled from "styled-components";
import * as colors from "../../resources/colors";

const RadioBtn = styled.div`
height: 50px;
width: 50px;
border-radius: 50%;
background-color: ${colors.lightGrey};
`;


const RadioBtnSelected = styled.div`
height: 40px;
width: 40px;
border: solid 5px ${colors.lightGrey};
border-radius: 50%;
background-image: linear-gradient(${colors.greenGradient});
`;

export { RadioBtn, RadioBtnSelected };
