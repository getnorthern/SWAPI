import React, { useState } from 'react';
import styled from '@emotion/styled';

import Modal from './Modal';

import {AvatarHairColor, AvatarSkinColor} from './AvatarConfig';

const OuterWrapper = styled.span`
  display: block;
  width: 10rem;
  height: 10rem;
  border-radius: 1rem;
  border: .2rem solid #000;
  position: relative;
  background: linear-gradient(-155deg, #ddd 30%, #fff 40%, #fff 60%, #ddd 70%);
  box-shadow: 0 0 20px rgba(255,255,255,0.7);
  margin: 0 auto;
  transition: box-shadow 0.7s, transform 0.2s;
  :hover {
    box-shadow: 0 0 20px rgba(255, 0, 0, 0.9);
    transform: scale(1.05);
    cursor: pointer;
  }
`;

const Face = styled.span`
  display: block;
  background: ${props => props.skinColor};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow: hidden;
  width: ${props => props.gender === 'male' || props.gender === 'n/a' ? '7rem' : '6.5rem'};
  height: 8rem;
  border-radius: ${props => props.gender === 'male' || props.gender === 'n/a' ? '30% 30% 35% 35%' : '40% 40% 50% 50%'};
  box-shadow: 0 0 15px rgba(0,0,0,0.4);
`;

const HairLeft = styled.span`
  display: block;
  display: ${props => props.hairColor ? 'block' : 'none'};
  background: ${props => props.hairColor || 'brown'};
  width: 7rem;
  height: 7rem;
  border-radius: 50%;
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(-48%, -40%);
  z-index: 10;
  box-shadow: 0 0 10px rgba(0,0,0,0.5);
`;

const HairRight = styled(HairLeft)`
  left: auto;
  right: 0;
  transform: translate(48%, -40%);
`;

const EyeLeft = styled.span`
  display: block;
  position: absolute;
  top: 50%;
  left: 25%;
  background: #fff;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50% 50% 30% 30%;
  transform: translate(-25%, -40%);
  > span {
    width: 1rem;
    height: 1rem;
    border: ${props => props.eyeColor || 'black'} .25rem solid;
    border-width: .3rem .3rem 0;
    background: black;
    border-radius: 50% 50% 30% 30%;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 0);
    overflow: hidden;
    span {
      background: #fff;
      width: .3rem;
      height: .3rem;
      position: absolute;
      top: .05rem;
      right: .05rem;
    }
  }
`;

const EyeRight = styled(EyeLeft)`
  left: auto;
  right: 25%;
  transform: translate(25%, -40%);
`;

const Mouth = styled.span`
  display: block;
  border: .2rem solid #000;
  border-width: 0 0 .2rem;
  width: ${props => props.gender === 'male' || props.gender === 'n/a' ? '3rem' : '2rem'};
  height: 3rem;
  position: absolute;
  left: 50%;
  bottom: 1rem;
  transform: translate(-50%, 0);
  border-radius: .5rem;
`;

const Avatar = (props) => {

  const [showInfo, setShowInfo] = useState(false);

  return (
    <>
      <OuterWrapper onClick={() => setShowInfo(!showInfo)}>
        <Face gender={props.gender} skinColor={AvatarSkinColor(props)}>
          <HairLeft hairColor={AvatarHairColor(props)} />
          <HairRight hairColor={AvatarHairColor(props)} />
          <EyeLeft eyeColor={props.eyeColor}><span><span /></span></EyeLeft>
          <EyeRight eyeColor={props.eyeColor}><span><span /></span></EyeRight>
          <Mouth gender={props.gender}/>
        </Face>
      </OuterWrapper>
      {showInfo && <Modal showInfo={showInfo} setShowInfo={setShowInfo} person={props.person} />}
    </>
  );
};

export default Avatar;
