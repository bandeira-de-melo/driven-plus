import { FormLogin, Input, LoginSubmit, StyledLoginPage } from "./LoginStyle";
import LOGODRIVEN from "../../assets/images/logo-driven.svg"
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState, useContext } from "react";
import AuthContext from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";


export default function LoginPage() {
    const {setAndPersistToken, setToken} = useContext(AuthContext)
    const [userInfo, setUserInfo] = useState({})
    const navigate = useNavigate()

    useEffect(()=>{
        const tokenOnLocalStorage = localStorage.getItem("token")
        if(tokenOnLocalStorage !== null){
          setToken(tokenOnLocalStorage)
        } 
      },[])

    function handleLoginInfo(e){
        setUserInfo({...userInfo, [e.target.name]: e.target.value})
        console.log(userInfo)
    }

    function login(e){
        e.preventDefault()
        const URL = "https://mock-api.driven.com.br/api/v4/driven-plus/auth/login"

        axios.post(URL, userInfo)
        .then(res => {
            console.log(res.data.token)
            setAndPersistToken(res.data.token)
            res.data.membership === null? navigate("/subscriptions") : navigate("/home")
        })
        .catch(err => {alert(err.message)})
    }
    return(
        <StyledLoginPage>
            <img src={LOGODRIVEN} alt="logo"/>
            <FormLogin onSubmit={login}>
                <Input type="email" placeholder="E-mail" name="email" onChange={handleLoginInfo}/>
                <Input type="password" placeholder="Senha" name="password" onChange={handleLoginInfo}/>
                <LoginSubmit type="submit" value="ENTRAR" />
                <Link to="/sign-up">
                    <p>Não possuí uma conta? Cadastre-se</p>
                </Link>
            </FormLogin>


        </StyledLoginPage>
    )
}