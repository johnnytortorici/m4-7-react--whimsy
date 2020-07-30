import React from "react";
import styled, { keyframes } from "styled-components";

const PoppingCircle = ({ size, color }) => {
  return (
    <Wrapper
      style={{ width: size, height: size, backgroundColor: color }}
    ></Wrapper>
  );
};

const popRed = keyframes`
  0% {
    opacity: 0;
    transform: scale(0);
  }
  40% {
    opacity: 0.6;
    transform: scale(1);
  }
  100% {
    opacity: 0;
  }
`;

const Wrapper = styled.div`
  position: absolute;
  border-radius: 50%;
  animation: ${popRed} 400ms forwards;
`;

export default PoppingCircle;
