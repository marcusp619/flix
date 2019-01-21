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
  return (
    <div style={{ height: '90vh' }}>
      <BackgroundVideo
        videoId="2g811Eo7K8U"
        opts={opts}
      />
    </div>
  )
};

const BackgroundVideo = styled(YouTube)`
  position: fixed;
  top: -2px;
  left: 0;
  min-width: 100%;
  height: 90vh;
  width: auto;
  z-index: -100;
`;

const mapStateToProps = state => ({
  movies: state.movies,
});

export default connect(
  mapStateToProps,
)(BackGroundVideo);
