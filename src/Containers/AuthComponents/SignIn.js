import React,{useState} from 'react'
import styled from 'styled-components'
import { TextField, 
    Button, 
    ComponentContainer, 
    Form, 
    TextHolder,
    FormTitle,
    FormLabel} from '../../Shared/SharedStyles/SharedStyledComponents';

const SignIn = () => {
    const handleSignin=(e)=>{
        e.preventDefault();
    }
    const handleUserChanges = (e)=>{
        setUser({...user, [e.target.name]: e.target.value })
    }
    const handleFormSubmit = (e)=>{}
    const initialUserState = {
        email:"",
        password:"",
    }
    const initialMatchingPassword = {
        rePassword: ""
    }
    const [user, setUser] = useState(initialUserState)
    return (
        <ComponentContainer padding={"10% 0 0 0"} height={"100vh"}>
            <Form onSubmit={(e)=>handleSignin(e)} bgColor={"#faf9f9"} width="40%" padding={"30px"}>
                <FormTitle>
                    Sign In
                </FormTitle>

                <TextHolder>
                    <FormLabel for={"username"}>
                        Email
                    </FormLabel>
                    <TextField 
                        name={"email"}
                        placeholder={"email"} 
                        value={user.email}
                        onChange={(e)=>handleUserChanges(e)}
                    />
                </TextHolder>
                <TextHolder>
                    <FormLabel for={"username"}>
                        Password
                    </FormLabel>
                    <TextField 
                        name={"password"}
                        type="password"
                        placeholder={"password"}
                        value={user.password}
                        onChange={(e)=>handleUserChanges(e)}
                    />
                </TextHolder>
                
                <Button hover={"true"} margin={"20px auto"} width={"50%"}>
                    Submit
                </Button>
            </Form>
        </ComponentContainer>
    )
}

export default SignIn

// const Form = styled.form`
// `
// const TextField = styled.input`
//     width: ${props => props.width ? props.width : null};
//     height: ${props => props.height ? props.height : null};
//     border: 1px solid black;
    
// `