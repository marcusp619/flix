import React from 'react';
import { connect } from 'react-redux';
import MovieCard from '../../components/MovieCard';
import styled from 'styled-components';

const MovieList = (props) => {
  const movieCards = props.movies.map((movie, i) => <MovieCard {...movie} key={`${Date.now()}${i}`} />)

  return (
    <MovieCardsContainer>
      {movieCards}
    </MovieCardsContainer>
  )
};

const MovieCardsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const mapStateToProps = state => ({
  movies: state.movies,
});

export default connect(
  mapStateToProps,
)(MovieList);
