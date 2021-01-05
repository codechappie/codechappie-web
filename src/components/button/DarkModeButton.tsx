import React, { Dispatch, SetStateAction, useState } from 'react'
import styled from 'styled-components'

import imgSun from '../../assets/icons/icons8_summer.svg';
import imgMoon from '../../assets/icons/icons8_moon.svg';

const DarkModeContainer = styled.div`
    position: relative;
    width: 55px;
    height: 55px;
    border-radius: 100%;
    padding: 12px;
    cursor: pointer;

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;
interface Iprops {
    myTheme: boolean;
    setDark: Dispatch<SetStateAction<boolean>>;
}
const DarkModeButton: React.FC<Iprops> = ({myTheme, setDark}) => {

    // const [toggle, setToggle] = useState(true);

    const changeTheme = () => {
        console.log("click");
        setDark(!myTheme)
    }

    return (
        <DarkModeContainer onClick={() => changeTheme()}> 
            {
                myTheme ? (
                    <img src={imgSun} alt=""/>
                ) : (
                    <img src={imgMoon} alt=""/>
                )
            }
        </DarkModeContainer>
    )
}

export default DarkModeButton
