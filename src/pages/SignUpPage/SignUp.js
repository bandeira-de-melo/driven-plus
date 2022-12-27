import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FormSignUpPage, Input, SignUpSubmit, StyledSignUpPage } from "./SignUpStyle";
import axios from "axios";

export default function SignUp() {
    const [name, setName] = useState("")
    const [cpf, setCpf] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    function signUp(e){
        e.preventDefault()
        
        axios.post("https://mock-api.driven.com.br/api/v4/driven-plus/auth/sign-up", {
            email, 
            name, 
            cpf, 
            password
            }
        )
        .then(res => navigate("/"))
        .catch(err => {alert(err.message)})
    }

    
    return(
        <StyledSignUpPage>
            <FormSignUpPage onSubmit={signUp}>
                <Input 
                    type="text" 
                    placeholder="Nome"  
                    value={name} 
                    onChange={e => setName(e.target.value)}
                    required
                    />
                <Input 
                    type="text" 
                    placeholder="CPF" 
                    value={cpf} 
                    onChange={e => setCpf(e.target.value)}
                    required
                    />
                <Input 
                    type="email" 
                    placeholder="E-mail" 
                    value={email} 
                    onChange={e => setEmail(e.target.value)}
                    required
                    />
                <Input 
                    type="password" 
                    placeholder="Senha"  
                    value={password} 
                    onChange={e => setPassword(e.target.value)}
                    required
                    />
                <SignUpSubmit type="submit" value="CADASTRAR"/>
                <Link to="/login">
                    <p>Já possuí uma conta? Entre</p>
                </Link>
                

            </FormSignUpPage>
        </StyledSignUpPage>
    )
}