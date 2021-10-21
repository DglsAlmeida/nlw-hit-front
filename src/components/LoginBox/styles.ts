import styled from "styled-components";
import bannerGirl from "../../assets/banner-girl.png";

export const LoginBoxWrapper = styled.div`
  height: 100vh;
  width: 100%;
  background: #17171a url(${bannerGirl}) no-repeat center top;
  padding: 440px 80px 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const LoginBoxTitle = styled.strong`
  font-size: 32px;
  line-height: 36px;
`;

export const LoginBoxLink = styled.a`
  background: #ffcd1e;
  margin-top: 32px;
  padding: 0 40px;
  height: 56px;
  color: #09090a;
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
  text-decoration: none;

  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    margin-right: 16px;
  }

  &:hover {
    filter: brightness(0.9);
  }
`;
