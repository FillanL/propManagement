import styled from 'styled-components'

export const ComponentContainer = styled.div`
    background-color: ${props => props.theme === 'dark' ? '#22223b': '#faf9f9'};
    color: ${props => props.theme === 'dark' ? '#faf9f9' : '#22223b'};
    height: 3rem;
    width: 100vw;
    max-width:100vw;
    height: ${props => props.height ? props.height : null};
    padding: ${props => props.padding ? props.padding : null};
`