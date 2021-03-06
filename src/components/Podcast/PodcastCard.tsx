import React from "react";
import styled from "styled-components";

const PodcastCardContainer = styled.div`
  display: flex;
  background: #fff;
  color: #333;
  width: fit-content;
  height: auto;
  padding: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.397);
  border-radius: 10px;
  animation: 6s ease 0s infinite normal none running bounce;

  @keyframes bounce {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-12px);
      scroll-behavior: smooth;
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.61);
    }
    100% {
      transform: translateY(0);
    }
  }
`;
const CoverPageContainer = styled.div`
  border-radius: 10px;
  position: relative;
  width: 70px;
  height: 70px;
  overflow: hidden;
  border-radius: 10px;
  background: red;
  margin-right: 10px;
`;
const CoverPage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const Information = styled.div`
  h5 {
    font-size: 0.84em;
  }
  small {
    font-size: 0.76em;
  }
`;

const PodcastCard = () => {
  return (
    <PodcastCardContainer>
      <CoverPageContainer>
        <CoverPage
          src="https://repository-images.githubusercontent.com/186700377/f4fad100-7709-11e9-8081-4754db138a60"
          alt=""
        />
      </CoverPageContainer>
      <Information>
        <h5>Bienvenido a @codechappie</h5>
        <small>por Code Chappie</small>
      </Information>
      <div className="MusicComponents">
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
        <div className="time">00:00/03:25</div>
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
      </div>
    </PodcastCardContainer>
  );
};

export default PodcastCard;
