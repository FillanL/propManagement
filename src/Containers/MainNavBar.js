import React from 'react'
import styled from 'styled-components'

import { useHistory } from 'react-router-dom'

function MainNavBar({theme}) {
    const history = useHistory();
    return (
        <NavContainer theme={theme}>
            <LogoHolder onClick={()=>history.push("/")}>Property Mangement</LogoHolder>
            <UnorderedList>
                <NavItem>Discover</NavItem>
                <NavItem>Categories</NavItem>
                <NavItem>Feed</NavItem>
            </UnorderedList>
            <RegisterHolder>
                <Button onClick={()=>history.push("/login")} theme={theme}> Login</Button>
                <Button onClick={()=>history.push("/signup")} theme={theme} color={"#e6beae"}>Try it Now</Button>
            </RegisterHolder>
        </NavContainer>
    )
}

export default MainNavBar

const NavItem = styled.li`
    list-style: none;
    display: inline;
    padding: 1rem;
`
const Button = styled.button`
    background: ${props => props.color ? props.color : 'transparent' };
    color: ${props => props.theme === 'dark' ? '#faf9f9' : '#22223b' };
    border-radius: 20px;
    border: 1px solid ${props => props.theme === 'dark' ? '#faf9f9' : '#22223b' };
    margin: 0.5em 0.5em;
    padding: 0.5rem 1rem;
    outline-style: none;
    cursor: pointer;
`
const LogoHolder = styled.span`
    font-weight: 900;
    font-size: 1.2rem;
    background: transparent;
    padding: 0.5rem 1rem;
    color: #e36414;
    cursor: pointer;
`
const UnorderedList = styled.ul`
    display: inline;
    list-style: none;
    margin:auto;
`
const RegisterHolder = styled.span`
    margin:auto;
`
export const NavContainer = styled.div`
    background-color: ${props => props.theme === 'dark' ? '#22223b': '#faf9f9'};
    color: ${props => props.theme === 'dark' ? '#faf9f9' : '#22223b'};
    height: 3rem;
    width: 100vw;
    display: grid;
    grid-template-columns: 25% 55% 20%;
`