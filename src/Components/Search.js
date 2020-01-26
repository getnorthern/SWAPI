import React, { useState } from 'react';
import styled from '@emotion/styled';

import Result from './Result';

const Wrapper = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 2.5rem 2.5rem 0;
`;

const InnerWrapper = styled.div`
  display: flex;
`;

const SearchInput = styled.input`
  border: 2px solid yellow;
  max-width: 20rem;
  font-size: 1.2rem;
  padding: .35rem .7rem;
  outline: none;
  border-radius: .5rem 0 0 .5rem;
`;

const SearchButton = styled.button`
  font-size: 1.2rem;
  padding: padding: .35rem .7rem;
  background: #000;
  color: ${props => props.disabled ? 'rgba(255, 255, 0, 0.2)' : 'yellow'};
  border: 2px solid yellow;
  border-width: 2px 2px 2px 0;
  cursor: ${props => props.disabled ? 'default' : 'pointer'};
  outline: none;
  transition: color 0.3s;
  border-radius: 0 .5rem .5rem 0;
`;

const Return = styled.span`
  text-decoration: underline;
  cursor: pointer;
`;

const Search = (props) => {

  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

  const disableSearch = searchTerm === '';

  return (
    <Wrapper onSubmit={props.formPreventDefault}>
      <InnerWrapper>
        <SearchInput
          type='text'
          value={searchTerm}
          onChange={handleChange}
          placeholder={'Search characters...'}
        />
        <SearchButton disabled={disableSearch} type={'Submit'} onClick={() => props.clickAction(searchTerm)}>Search</SearchButton>
      </InnerWrapper>
      {props.count === 0 && <Result>No characters found. Please try a different search term, or <Return onClick={() => props.return(`${props.baseURL}/people/`)}>return to the character list</Return>.</Result>}
      {props.resultType === 'search' && props.count > 0 && <Result><Return onClick={() => props.return(`${props.baseURL}/people/`)}>Return to the character list</Return></Result>}
    </Wrapper>
  );
};

export default Search;
