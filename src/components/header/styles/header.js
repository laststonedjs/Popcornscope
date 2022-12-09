import styled, { keyframes } from 'styled-components/macro';


export const Background = styled.div`
  display: flex;
  flex-direction: column;
  background: url(${({ src }) => src ? `../images/misc/${src}.jpg` : '../images/misc/header_bg.jpg'}) top left / cover no-repeat;

  @media (max-width: 1100px) {
    ${({ dontShowOnSmallScreen }) => dontShowOnSmallScreen && `background: none;`}}

`;

export const Frame = styled.div`
  
`;

export const Group = styled.div`
  display: flex;
  align-items: center;
  margin-left: 8px;
`;

export const Container = styled.div`
  display: flex;
  margin: 0 56px;
  height: 64px;
  padding: 18px 0;
  justify-content: space-between;
  align-items: center;

  a {
    display: flex; 
  }

  @media (max-width: 1000px) {
    margin: 0 30px;
  }
`;

export const Logo = styled.img`
  height: 55px;
  width: 85px;
  margin-left: 10px;

  @media (min-width: 1449px) {
    height: 75px;
    width: 140px;
  }
`;

export const Feature = styled(Container)`
  padding: 220px 0 500px 0;
  flex-direction: column;
  align-items: normal;
  width: 40%;
  margin-left: 56px;

  @media (max-width: 1100px) {
    display: none;
  }
`;

const breatheAnimation = keyframes`
  0%,
  100% {
    text-shadow: 0 0 2px #e6b800, 0 0 2px #e6b800, 0 0 2px #ffff66, 0 0 1px #ffff66, 0 0 1px #ffff66, 1px 1px 2px #e6eeff;
    color: #e6b800;
  }
  70% {
    text-shadow: 0 0 2px #ffb399, 0 0 2px #ffb399, 0 0 2px #cccc00, 0 0 2px #cccc00, 0 0 1.5px #b3b300, 1px 1px 1.5px #ff4d4d;
    color: #ffb399;
  }
  30% {
    text-shadow: 0 0 2px #ffb399, 0 0 2px #ffb399, 0 0 2px #cccc00, 0 0 2px #cccc00, 0 0 1.5px #b3b300, 1px 1px 1.5px #ff4d4d;
    color: #ffb399;
  }
`;

export const Text = styled.p`
  color: #e6b800;
  font-size: 18px;
  line-height: normal;
  letter-spacing: 1.2px;
  font-style: normal;
  border: none;
  outline: none;
  padding: 5px;
  margin: 0;
  animation-name: ${breatheAnimation};
  animation-duration: 2s;
  animation-iteration-count: infinite;
`;

export const Link = styled.p`
  color: white;
  text-decoration: none;
  margin-right: 20px;
  font-weight: ${({ active }) => (active === 'true' ? '700' : 'normal')};
  cursor: pointer;

  &:hover {
    font-weight: bold;
    color: #e6b800;
  }

  &::last-of-type {
    margin-right: 0;
  }
`;

const slideIn = keyframes`
   from {
    margin-left: 70%;
    width: 200%;
  }

  to {
    margin-left: 0%;
    width: 100%;
  }

`;

export const FeatureCallOut = styled.h2`
  background: linear-gradient(#000000, #330000) opacity 0.6;
  font-size: 32px;
  color: #ff4d00;
  line-height: normal;
  letter-spacing: 0.6px;
  font-style: normal;
  border-radius: 1px;
  padding: 2px 0 1px 12px;
  margin: 10px 0 20px 0;
  text-align: center;
  text-shadow: 1px 1px 5px crimson;
  position: relative;
  animation-name: ${slideIn};
  animation-duration: 3s;
  animation-iteration-count: infinite;
`;

export const Search = styled.div`
  display: flex;
  align-items: center;

  svg {
    color:white;
    cursor: pointer;
  }

  @media (max-width: 700px) {
    display: none;
  }
`;

export const SearchIcon = styled.button`
  cursor: pointer;
  background: transparent;
  border: 0;

  img {
    filter: brightness(0) invert(1);
    width: 35px;
  }
`;

export const PlayButton = styled.button`
  box-shadow: 0 0.6vw 1vw -0.4vw rgba(0, 0, 0, 0.35);
  background-color: #ebebeb;
  color: #000;
  font-weight: bold;
  border-width: 0;
  padding: 10px 20px;
  border-radius: 5px;
  max-width: 130px;
  font-size: 20px;
  margin-top: 30px;
  cursor: pointer;

  &:hover {
    background-color: #ff1e1e;
    color: white;
  }
`;

export const SearchInput = styled.input`
 background-color: #44444459;
 color: white;
 border: 1px solid whitesmoke;
 transition: width 0.5s;
 height: 35px;
 font-size: 15px;
 letter-spacing: 0.7px;
 margin-left: ${({ active }) => (active === true ? '10px' : '0')};
 padding: ${({ active }) => (active === true ? '0 15px' : '0')};
 opacity: ${({ active }) => (active === true ? '1' : '0')};
 width: ${({ active }) => (active === true ? '300px' : '0px')};
`;
