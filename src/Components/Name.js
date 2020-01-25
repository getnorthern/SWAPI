import React from 'react';
import styled from '@emotion/styled';

const PersonName = styled.h2`
  color: #fff;
  text-align: center;
  font-size: 1.2rem;
`;

const Name = (props) => (
  <PersonName>
    {props.children}
  </PersonName>
);

export default Name;
