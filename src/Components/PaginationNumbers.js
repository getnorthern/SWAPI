import React from 'react';
import styled from '@emotion/styled';

const Wrapper = styled.ul`
  padding: 0;
`;

const Number = styled.span`
  color: ${props => props.current ? 'yellow' : '#fff'};
  padding: 0 .35rem;
  font-weight: ${props => props.current ? '800' : '200'};
  cursor: pointer;
`;

class PaginationNumbers extends React.Component {

  render() {
    const currentPage = this.props.page;

    const range = (from, to, step = 1) => {
      let i = from;
      const range = [];
      while (i <= to) {
        range.push(i);
        i += step;
      }
      return range;
    };

    const pageNumbers = () => {
      const pages = [Math.ceil(this.props.people.count / this.props.numberPerPage)];
      if (pages === [1]) return null;
      return range(1, pages);
    };

    console.log('currentPage = ', currentPage);
    console.log('page = ', this.props.page);

    return (
      <nav>
        <Wrapper>
          {pageNumbers().map((page, index) => {
            return (
              <li key={index} style={{display: 'inline-block'}}>
                <Number current={(index + 1) === this.props.page} onClick={() => this.props.setPage(page)}>{page}</Number>
              </li>
            );
          }) }
        </Wrapper>
      </nav>
    );
  }
}

export default PaginationNumbers;
