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
  display: ${props => props.showInfo ? 'block' : 'none'};
  background: rgba(0,0,0,0.85);
  position: fixed;
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

const Text = styled.p`
  text-align: center;
  font-size: 1.6rem;
  color: #fff;
`;

const Close = styled.p`
  position: absolute;
  top: 2rem;
  right: 2rem;
  font-size: 1.6rem;
  color: #fff;
  cursor: pointer;
  padding: 0;
  margin: 0;
`;

const Loader = (props) => (
  <OuterWrapper showInfo={props.showInfo}>
    <Close onClick={() => props.setShowInfo(!props.showInfo)}>X</Close>
    <Wrapper center={props.center} margin={props.margin}>
      <Text>{props.person.name}</Text>
    </Wrapper>
  </OuterWrapper>
);

export default Loader;
