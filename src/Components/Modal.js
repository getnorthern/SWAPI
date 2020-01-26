import React from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/core';

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const textAnimation = keyframes`
  0% {
    top: 0;
    transform: rotateX(20deg)  translateZ(0);
  }
  100% {
    top: -550rem;
    transform: rotateX(25deg) translateZ(-250rem);
  }
}`;

const OuterWrapper = styled.div`
  background: rgba(0,0,0,0.9);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 10;
  animation: ${fadeIn} 0.5s linear forwards;
`;

const Close = styled.p`
  position: absolute;
  top: 2rem;
  right: 2rem;
  font-size: 1.6rem;
  color: #990;
  cursor: pointer;
  padding: 0;
  margin: 0;
  z-index: 20;
  font-weight: 600;
`;

const Fade = styled.div`
  position: relative;
  width: 100%;
  min-height: 60vh;
  top: -2.5rem;
  background-image: linear-gradient(0deg, transparent, black 75%);
  z-index: 1;
`;

const Text = styled.section`
  display: flex;
  justify-content: center;
  position: relative;
  height: 80rem;
  color: #feda4a;
  font-size: 500%;
  font-weight: 600;
  letter-spacing: .6rem;
  line-height: 150%;
  perspective: 40rem ;
  text-align: justify;
  color: #990;
`;

const AnimateText = styled.div`
  position: relative;
  top: 9999rem;
  transform-origin: 50% 100%;
  animation: ${textAnimation} 60s linear;
  p {
    text-align: center;
    text-transform: uppercase;
    font-weight: 800;
  }
`;

const Loader = (props) => (
  <OuterWrapper showInfo={props.showInfo}>
    <Close onClick={() => props.setShowInfo(!props.showInfo)}>X</Close>
    <Fade/>
      <Text>
        <AnimateText>
          <p>Name: {props.person.name}</p>
          <p>Height: {props.person.height}</p>
          <p>Mass: {props.person.mass}</p>
          <p>Hair Colour: {props.person.hair_color}</p>
          <p>Skin Colour: {props.person.skin_color}</p>
          <p>Eye Colour: {props.person.eye_color}</p>
          <p>Birth Year: {props.person.birth_year}</p>
          <p>Gender: {props.person.gender}</p>
        </AnimateText>
      </Text>
  </OuterWrapper>
);

export default Loader;
