import React, { useState } from 'react';
import { TextField, 
        Button, 
        ComponentContainer, 
        Form, 
        TextHolder,
        FormTitle,
        FormLabel} from '../../Shared/SharedStyles/SharedStyledComponents';


function SignUp() {
    const handleSignUp=(e)=>{
        e.preventDefault();
    }
    const handleUserChanges = (e)=>{
        setUser({...user, [e.target.name]: e.target.value })
    }
    const handleRepasswordChanges = (e)=>{
        setRePassword({...rePassword, [e.target.name]: e.target.value })
    }
    const handleFormSubmit = (e)=>{}
    const initialUserState = {
        username:"",
        password:"",
        email:""
    }
    const initialMatchingPassword = {
        rePassword: ""
    }
    const [rePassword, setRePassword] = useState(initialMatchingPassword)
    const [user, setUser] = useState(initialUserState)
    return (
        <ComponentContainer padding={"10% 0 0 0"} height={"100vh"}>
            <Form onSubmit={(e)=>handleSignUp(e)} bgColor={"#faf9f9"} width="40%" padding={"30px"}>
                <FormTitle>
                    Create an Account
                </FormTitle>
                <TextHolder>
                    <FormLabel for={"username"}>
                        Username
                    </FormLabel>
                    <TextField 
                        name={"username"}
                        placeholder={"username"}
                        value={user.username} 
                        onChange={(e)=>handleUserChanges(e)}
                    />
                </TextHolder>
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
                <TextHolder>
                    <FormLabel for={"rePassword"}>
                        Re-Enter Password
                    </FormLabel>
                    <TextField 
                        name={"rePassword"}
                        type="password" 
                        placeholder={"re-enter password"}
                        value={rePassword.rePassword}
                        onChange={(e)=>handleRepasswordChanges(e)}
                    />
                </TextHolder>
                <Button hover={"true"} margin={"20px auto"} width={"50%"}>
                    Submit
                </Button>
            </Form>
        </ComponentContainer>
    )
}

export default SignUp
