import styled, {
  keyframes
} from "styled-components";

const rotate = keyframes `
 0% {
    transform: rotateY(0deg);
  }

  100% {
    transform: rotateY(360deg);
  }
  
`;

export const LogoStyled = styled.div `
  font-size:90px;
  color: red ;
  animation: ${rotate} 10s linear infinite;
`;