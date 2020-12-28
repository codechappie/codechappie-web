import React from 'react'
import Navbar from '../components/navbar/Navbar'
import styled from 'styled-components'

const Container = styled.div`
    background: ${({theme}) => theme.background};
    margin: auto;
    height: 200px;

    ${({theme})=> theme.queries.bigDesktop}{
        width: 1400px;
    }
    
    ${({theme})=> theme.queries.mediumDesktop}{
        width: 90vw;
    }
    ${({theme})=> theme.queries.smallDesktop}{
        width: 98vw;
    }


`;

const LandingPage = () => {
    return (
        <Container>
            <Navbar />
        </Container>
    )
}

export default LandingPage
