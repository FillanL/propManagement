import styled from 'styled-components'

export const ComponentContainer = styled.div`
    background-color: ${props => props.theme === 'dark' ? '#22223b': '#faf9f9'};
    color: ${props => props.theme === 'dark' ? '#faf9f9' : '#22223b'};
    height: 3rem;
    width: 100vw;
    max-width:100vw;
    height: ${props => props.height ? props.height : null};
    padding: ${props => props.padding ? props.padding : "10px"};
`
export const Button = styled.button`
    background: ${props => props.color ? props.color : 'transparent' };
    color: ${props => props.theme === 'dark' ? '#8e9aaf' : '#8e9aaf' };
    border: 1px solid ${props => props.theme === 'dark' ? '#8e9aaf' : '#8e9aaf' };
    width:  ${props => props.width ? props.width : null };
    border-radius: 10px;
    margin: 0.5em 0.5em;
    padding: 0.5rem 1rem;
    outline-style: none;
    cursor: pointer;
    box-shadow: 3px 5px 6px #ced4da;
    margin: ${props => props.margin ? props.margin : "auto" };
    ${props => props.hover ? 
        (`&:hover {
            box-shadow: 2px 3px 4px #ced4da;
        }`)
        : null };
    
`
export const Form = styled.form`
    display:grid;
    grid-template-rows: 1fr;
    background-color: ${props => props.bgColor ? props.bgColor : null};
    height: ${props => props.height ? props.height : null};
    width: ${props => props.width ? props.width : null};
    padding: ${props => props.padding ? props.padding : null};
    border: 1px solid ${props => props.theme === 'dark' ? '#8e9aaf' : '#343a40' };
    margin: auto;
    border-radius:5px;
`
export const TextField = styled.input`
    width: ${props => props.width ? props.width : "65%"};
    height: ${props => props.height ? props.height : "1.7rem"};
    border: 1px solid ${props => props.borderColor ? props.borderColor : '#8e9aaf' };
    outline: ${props => props.error ? null : "none"};
    border-radius: 7px;
    font-size: 0.95rem;
    padding: 12px;
    margin: auto;
`
export const TextHolder = styled.div`
    width: ${props => props.width ? props.width : "65%"};
    display:grid;
    margin: 7px auto;
    width: 100%;
    text-align: center;
`
export const FormTitle = styled.h1`
    color:black;
    margin: auto;
    padding: 10px 0 30px 0 ;
`;
export const FormLabel = styled.label`
    text-align:left;
    padding: 0 0 0 17%;
    margin-bottom: 5px;
`