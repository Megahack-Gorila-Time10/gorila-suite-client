import styled from "styled-components";

const BannerBG = styled.div`
  width: 100%;
  height: 982px;
  background-image: url(/img/svg/yellow-black-BG.svg);
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Cards = styled.div`
  display: flex;
  align-items: center;
  width: 100&;
`;

const Title = styled.div`
  font-weight: 800;
  font-size: 44px;
  line-height: 54px;
  text-align: center;
  color: #ffffff;
`;

const VCenter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export { BannerBG, Cards, Title, VCenter };
