import React, { Dispatch, SetStateAction } from "react";
import imgLogo from "../../assets/images/logo.png";
import styled from "styled-components";
import Item from "./Item";
import DarkModeButton from "../button/DarkModeButton";
import SideButton from "../button/SideButton";

const NavbarStyled = styled.div`
  background: ${({ theme }) => theme.colors.navbar};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  height: auto;
  border-bottom: 1px solid #161616;
  transition: all .5s ease-in-out;
  width: 100%;
  position: fixed;
`;
const NavbarContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
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
const MenuItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  height: 70px;
`;
const LeftContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;
const ImageContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
`;
const LogoImg = styled.img`
  height: 30px;
  margin-right: 20px;
`;

interface Iprops {
  myTheme: boolean;
  setDark: Dispatch<SetStateAction<boolean>>;
}
const Navbar: React.FC<Iprops> = ({myTheme, setDark}) => {
  return (
    <NavbarStyled>
      <NavbarContainer>
        <LeftContainer>
        <ImageContainer>
          <LogoImg src="https://codechappie.now.sh/static/media/logo-white.daf29dc9.png" alt="" />
        </ImageContainer>

        <MenuItems>
          <Item text="Inicio" />
          <Item text="Cursos" />
          <Item text="Blog" />
          <Item text="Portafolio" />
        </MenuItems>
        </LeftContainer>
        <div className="rigth-container">
        <MenuItems>
            <DarkModeButton myTheme={myTheme} setDark={setDark} />
            <SideButton myTheme={myTheme}/>
            {/* <Item text="Iniciar Sesión" />
            <Item text="Registrarse" /> */}
        </MenuItems>
        </div>
      </NavbarContainer>
    </NavbarStyled>
  );
};

export default Navbar;
