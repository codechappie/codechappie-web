import React from "react";
import styled from "styled-components";
import PodcastCard from "../Podcast/PodcastCard";

const HeroStyled = styled.div`
  display: flex;
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.color};
`;
const HeroContainer = styled.div`
  display: grid;
  min-height: 100vh;
  height: auto;
  grid-template-columns: 1fr 1fr;
  margin: auto;
  ${({ theme }) => theme.queries.bigDesktop} {
    width: 1400px;
  }
  ${({ theme }) => theme.queries.mediumDesktop} {
    width: 90vw;
  }
  ${({ theme }) => theme.queries.smallDesktop} {
    width: 98vw;
  }
`;


const Hero = () => {
  return (
    <HeroStyled>
      <HeroContainer>
        <div className="MainText">
          <h1>Explora el mundo del desarrollo web</h1>
          <p>
            Aprende a programar, adquiere una nueva habilidad, consigue un nuevo
            trabajo, cambia tu mundo.
          </p>
          <button>!Empezar ahora!</button>
        </div>

        <div className="WebPreview">
          <PodcastCard />

          <div className="video-card"></div>

          <div className="blog-card"></div>
        </div>
      </HeroContainer>
    </HeroStyled>
  );
};

export default Hero;
