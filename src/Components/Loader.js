import React from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/core';

const progress = keyframes`
  0% {
    stroke-dasharray: 5 100;
    transform: rotate(0);
  }
  50% {
    stroke-dasharray: 90 100;
    transform: rotate(360deg);
  }
  100% {
    stroke-dasharray: 5 100;
    transform: rotate(1090deg);
  }
`;

const OuterWrapper = styled.div`
  background: rgba(0,0,0,0.7);
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 10;
`;

const Wrapper = styled.div`
  position: absolute;
  text-align: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const SVG = styled.svg`
  width: 5rem;
`;

const Circle = styled.path`
  fill: none;
  stroke-width: 3;
  stroke-linecap: round;
  stroke-dasharray: 0 100;
  animation: ${progress} 3s 0s linear infinite;
  transform-origin: center center;
  opacity: 0.5;
`;

const Text = styled.p`
  text-align: center;
  font-size: 1.6rem;
  color: #fff;
`;

const Loader = (props) => (
  <OuterWrapper>
    <Wrapper center={props.center} margin={props.margin}>
      <SVG viewBox="0 0 36 36" className="circular-chart" width={props.width}>
        <Circle
          d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
          stroke={props.foregroundColour || '#C8C8C8'}
        />
      </SVG>
      <Text>{props.text}</Text>
    </Wrapper>
  </OuterWrapper>
);

export default Loader;
