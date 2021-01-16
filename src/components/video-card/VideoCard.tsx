import React from "react";
import styled from "styled-components";

const VideoCardStyled = styled.div`
  border-radius: 20px;
  overflow: hidden;
  width: 100%;
  padding-top: 56.25%;
  position: relative;

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }
`;

const VideoCard = () => {
  return (
    <VideoCardStyled>
        <iframe
          id="ytplayer"
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/nEIap8BJWaE?autoplay=1&controls=0&enablejsapi=1&color=white"
          frameBorder="0"
          allowFullScreen
        ></iframe>
    </VideoCardStyled>
  );
};

export default VideoCard;
