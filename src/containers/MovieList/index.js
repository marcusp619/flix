import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

const MovieList = (props) => {
  const movieCards = props.movies.map(movie => <MoiveCard {...movie} />);

  return (
    { movieCards }
  )
};
const mapStateToProps = state => ({
  movies: state.movies,
});

export default connect(
  mapStateToProps,
)(MovieList);
