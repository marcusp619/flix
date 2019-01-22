import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMovies } from '../../thunks/fetchMovies';
import Header from '../../components/Header';
import BackgroundVideo from '../../containers/BackgroundVideo';
import MovieList from '../MovieList';
import { createGlobalStyle } from 'styled-components';
import './App.css';

class App extends Component {

  componentDidMount() {
    const query = `{
      movies {
         id
        title
        poster_path
        overview
        videos {
          id
          key
        }
      }
    }
    `
    this.props.fetchMovies(query)
  }

  render() {
    return (
      <div className="App">
        <GlobalStyles />
        <Header />
        <BackgroundVideo />
        <MovieList />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  movies: state.movies,
  isLoading: state.isLoading,
  error: state.error
});

const mapDispatchToProps = dispatch => ({
  fetchMovies: url => dispatch(fetchMovies(url)),
});

const GlobalStyles = createGlobalStyle`
    body {
        @import url('https://fonts.googleapis.com/css?family=Kanit|Roboto');
        font-family: 'Kanit', sans-serif;
    }
`;

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
