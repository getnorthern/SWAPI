import React from 'react';
import styled from '@emotion/styled';

const Wrapper = styled.div`
  width: 100vw;
`;

const OuterWrapper = (props) => (
  <Wrapper>
    {props.children}
  </Wrapper>
);

export default OuterWrapper;
