import React from 'react';
import styled from '@emotion/styled';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2.5rem;
`;

const PaginationWrapper = (props) => (
  <Wrapper>
    {props.children}
  </Wrapper>
);

export default PaginationWrapper;
