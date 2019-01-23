import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import YouTube from 'react-youtube';

const BackGroundVideo = (props) => {
  const opts = {
    height: '900',
    width: '100%',
    playerVars: { // https://developers.google.com/youtube/player_parameters
      autoplay: 1
    }
  }
  
  if (props.movies.length > 0) {
    return (
      <BackSplash posterPath={props.movies[1].backdrop_path}>
        <BackgroundVideo
          videoId="2g811Eo7K8U"
          opts={opts}
        />
      </BackSplash>
    )
  }
  return <div>...loading</div>
};

const BackSplash = styled.div`
  background: url(https://image.tmdb.org/t/p/w500${props => props.posterPath}) no-repeat center center fixed; 
  background-size: cover;
  height: 80vh;
  position: relative;
`

const BackgroundVideo = styled(YouTube)`
  position: absolute;
  top: 25%;
  right: 67px;
  width: 45%;
  height: 50%;
`;

const mapStateToProps = state => ({
  movies: state.movies,
});

export default connect(
  mapStateToProps,
)(BackGroundVideo);
