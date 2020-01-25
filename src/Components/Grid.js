import React from 'react';
import styled from '@emotion/styled';

const OuterGrid = styled.ul`
  display: grid;
  grid-template-columns: repeat( auto-fill, minmax(250px, 1fr) );
  grid-rows: auto;
  grid-gap: 2.5rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0;
`;

const Grid = (props) => (
  <OuterGrid>
    {props.children}
  </OuterGrid>
);

export default Grid;
