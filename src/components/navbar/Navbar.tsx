import React from 'react'
import imgLogo from '../../assets/images/logo.png';
import styled from 'styled-components'


const NavbarStyled = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
const LogoImg = styled.img`
    height: 30px;
`;

const Navbar = () => {
    return (
        <NavbarStyled>
            <div className="logo">
                <LogoImg src={imgLogo} alt=""/>
            </div>

            <div className="menu-items">
                <div className="item">
                    Tutoriales
                </div>
                <div className="item">
                    Cursos
                </div>
                <div className="item">
                    Blog
                </div>
                <div className="item">
                    Portafolio
                </div>
                <div className="button">
                    Iniciar Sesión
                </div>
            </div>
        </NavbarStyled>
    )
}

export default Navbar
