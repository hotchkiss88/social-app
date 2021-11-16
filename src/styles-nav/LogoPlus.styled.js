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

export const LogoPlus = styled.span `
color: red; 
display: inline-block;
font-weight: 900;
animation: ${rotate} 5s linear infinite;
`;