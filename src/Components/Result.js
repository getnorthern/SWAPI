import React from 'react';
import styled from '@emotion/styled';

const Text = styled.p`
  color: yellow;
  text-align: center;
  margin: 2.5rem 0 0;
  flex-basis: 100%;
`;

const Result = (props) => (
  <Text>
    {props.children}
  </Text>
);

export default Result;
