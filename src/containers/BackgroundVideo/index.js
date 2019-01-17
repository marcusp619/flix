import React from 'react';
import styled from 'styled-components';

const BackgroundVideo = () => (
  <BackGroundVideo>
    <source src="https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4"  /> 
  </BackGroundVideo>
);

const BackGroundVideo = styled.video.attrs({
  autoPlay: true,
  // loop: true,
  muted: true
})`
 position: fixed;
 top: -2px;
 left: 0;
 min-width: 100%;
 height: 100vh;
 width: auto;
 z-index: -100;
 object-fit: cover;
//  background: url(polina.jpg) no-repeat;
`

export default BackgroundVideo;