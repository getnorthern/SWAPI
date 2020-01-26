import React from 'react';
import styled from '@emotion/styled';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2.5rem;
  max-width: 80rem;
  margin: 0 auto;
`;

const PaginationWrapper = (props) => (
  <Wrapper>
    {props.children}
  </Wrapper>
);

export default PaginationWrapper;
