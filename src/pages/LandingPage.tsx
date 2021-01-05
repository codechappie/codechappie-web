import React, { Dispatch, SetStateAction } from 'react'
import Navbar from '../components/navbar/Navbar'
import styled from 'styled-components'
import Hero from '../components/hero/Hero'

interface Iprops {
    myTheme: boolean;
    setDark: Dispatch<SetStateAction<boolean>>;
}
const LandingPage: React.FC<Iprops> = ({myTheme, setDark}) => {
    return (
        <>
            <Navbar myTheme={myTheme} setDark={setDark} />
            <Hero />
        </>
    )
}

export default LandingPage
