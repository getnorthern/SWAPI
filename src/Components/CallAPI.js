import React from 'react';

import Grid from './Grid';
import Loader from './Loader';
import Title from './Title';
import Search from './Search';
import PaginationWrapper from './PaginationWrapper';
import Pager from './Pager';
import PaginationNumbers from './PaginationNumbers';
import Avatar from './Avatar';
import Name from './Name';

class CallAPI extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      baseURL: 'https://swapi.co/api',
      error: null,
      isLoaded: false,
      isUpdating: false,
      people: [],
      page: 1,
      next: null,
      previous: null,
      numberPerPage: 10,
      numberOfPages: null,
    };
    this.getData = this.getData.bind(this);
    this.prevPage = this.prevPage.bind(this);
    this.nextPage = this.nextPage.bind(this);
    this.setPage = this.setPage.bind(this);
    this.search = this.search.bind(this);
    this.formPreventDefault = this.formPreventDefault.bind(this);
  }

  componentDidMount() {
    this.getData(`${this.state.baseURL}/people/`);
  }

  getData(url) {
    fetch(url)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            isUpdating: false,
            people: result,
            next: result.next,
            previous: result.previous,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  nextPage(nextPage) {
    if (nextPage === null) return false;
    this.setState({
      isUpdating: true,
      page: this.state.page + 1,
    });
    this.getData(this.state.next);
  }

  prevPage(prevPage) {
    if (prevPage === null) return false;
    this.setState({
      isUpdating: true,
      page: this.state.page - 1,
    });
    this.getData(this.state.previous);
  }

  setPage(page) {
    this.setState({
      isUpdating: true,
      page: page,
    });
    this.getData(`${this.state.baseURL}/people/?page=${page}`);
  }

  search(searchTerm) {
    this.setState({
      isUpdating: true,
      page: 1,
    });
    this.getData(`${this.state.baseURL}/people/?search=${searchTerm}`);
  }

  formPreventDefault(e) {
    e.preventDefault();
  }

  render() {

    const { error, isLoaded, people } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <Loader center text={'Loading...'}>Loading...</Loader>;
    } else {
      return (
        <>
          {this.state.isUpdating && <Loader center text={'Updating results...'}>Loading...</Loader>}
          <Title>Star Wars Characters</Title>
          <Search clickAction={this.search} count={people.count} return={this.getData} baseURL={this.state.baseURL} formPreventDefault={this.formPreventDefault}/>
          <PaginationWrapper>
            <Pager disabled={!people.previous} clickAction={() => this.prevPage(people.previous || null)} style={{ color: '#fff'}}>&laquo; Prev</Pager>
            {isLoaded && <PaginationNumbers people={this.state.people} numberPerPage={this.state.numberPerPage} page={this.state.page} setPage={this.setPage} />}
            <Pager disabled={!people.next} clickAction={() => this.nextPage(people.next || null)} style={{ color: '#fff'}}>Next &raquo;</Pager>
          </PaginationWrapper>
          <Grid>
            {people.results.map(person => (
              <li key={person.name}>
                <Avatar
                  gender={person.gender}
                  hairColor={person.hair_color}
                  skinColor={person.skin_color}
                  eyeColor={person.eye_color}
                  name={person.name}
                />
                <Name>{person.name}</Name>
              </li>
            ))}
          </Grid>
          <PaginationWrapper>
            <Pager disabled={!people.previous} clickAction={() => this.prevPage(people.previous || null)}>&laquo; Prev</Pager>
            {isLoaded && <PaginationNumbers people={this.state.people} numberPerPage={this.state.numberPerPage} page={this.state.page} setPage={this.setPage} />}
            <Pager disabled={!people.next} clickAction={() => this.nextPage(people.next || null)}>Next &raquo;</Pager>
          </PaginationWrapper>
        </>
      );
    }
  }
}

export default CallAPI;
