import React from 'react';
import styled from '@emotion/styled';

const Text = styled.h1`
  color: yellow;
  text-align: center;
  margin: 2.5rem 0 0;
`;

const Title = (props) => (
  <Text>
    {props.children}
  </Text>
);

export default Title;
