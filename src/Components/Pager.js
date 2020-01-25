import React from 'react';
import styled from '@emotion/styled';

const P = styled.p`
  color: ${props => props.disabled ? 'rgba(255,255,255,0.35)' : '#fff'};
  cursor: ${props => props.disabled ? 'default' : 'pointer'};
`;

const Pager = (props) => (
  <P disabled={props.disabled} onClick={props.clickAction}>
    {props.children}
  </P>
);

export default Pager;
