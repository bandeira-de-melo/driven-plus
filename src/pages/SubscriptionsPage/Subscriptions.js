import { StyledSubCard, StyledSubscriptionsPage } from "./SubscriptionsStyle";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../../contexts/AuthContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";



export default function Subscriptions() {
    const navigate = useNavigate()
    const {token, setSubscription, setUserMembership, memberships, setMemberships} = useContext(AuthContext)
    

    useEffect(()=> {
        const URL = "https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions/memberships"
        axios.get(URL, {
            headers: { 
                'Authorization': `Bearer ${token}`
            }
        })
        .then(res => {setMemberships(res.data)})
        .catch(err => {alert(err.response.message)})
    },[])

    function signUpMembership(id){
       const URL = `https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions/memberships/${id}`
       axios.get(URL, {
        headers: {
            'Authorization': `Bearer ${token}` 
        }
       })
       .then(res => {
            setSubscription(res.data)
        
            navigate(`/subscriptions/${id}`)

       })
       .catch(err => {alert(err.message)})
    }

    if(memberships === null){
        return(
            <h1>Carregando...</h1> 
        ) 
    }  

    return(
        <StyledSubscriptionsPage>
            <h1>Escolha seu Plano</h1> 
            {memberships.map(m => {
                return(
                    
                    <StyledSubCard key={m.id} onClick={()=>signUpMembership(m.id)}>
                        <img src={m.image} alt="" /> <h2>{m.price}</h2>
                    </StyledSubCard>
                    
                )
            })}
        </StyledSubscriptionsPage>
    )
}