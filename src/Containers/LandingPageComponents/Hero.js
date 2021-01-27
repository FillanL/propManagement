import React from 'react'
import styled from 'styled-components'
import {ComponentContainer} from '../../Shared/SharedStyles/SharedStyledComponents'

function Hero({theme}) {
    return (
        <ComponentContainer height={"300px"} padding={"4rem"} theme={theme}>
            <HeroHeader>
                Handle all things Property Mangement related from one central hub
            </HeroHeader>
        </ComponentContainer>
    )
}

export default Hero

const HeroHeader = styled.h1`
    // padding:50px;
     margin:0;
     width: 50vw
`