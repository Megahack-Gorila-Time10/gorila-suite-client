import styled from "styled-components";

const Nav = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 60px;
`;

const NavItem = styled.div`
  color: ${(props) => props.color};
  font-weight: 800;
  font-size: 18px;
  line-height: 22px;
  margin: 0 30px;
`;

export { Nav, NavItem };
