import React from 'react'
import styled from 'styled-components'

import imgMenu from '../../assets/icons/icons8_menu_vertical.svg';
import imgMenuDark from '../../assets/icons/icons8_menu_vertical_dark.svg';

const SideButtonStyled = styled.div`
    position: relative;
    width: 55px;
    height: 55px;
    border-radius: 100%;
    padding: 13px;
    cursor: pointer;

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

`;
interface Iprops {
    myTheme: boolean;
}
const SideButton: React.FC<Iprops> = ({myTheme}) => {
    return (
        <SideButtonStyled>
            {
                myTheme ? (
                    <img src={imgMenu} alt=""/>
                ) : (
                    <img src={imgMenuDark} alt=""/>
                )
            }
        </SideButtonStyled>
    )
}

export default SideButton
