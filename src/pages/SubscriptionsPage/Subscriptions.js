import { StyledSubCard, StyledSubscriptionsPage } from "./SubscriptionsStyle";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../../contexts/AuthContext";
import axios from "axios";


export default function Subscriptions() {
    const {token} = useContext(AuthContext)
    const [memberships, setMemberships] = useState(null)
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
                    <StyledSubCard key={m.id}>
                        <img src={m.image} alt="" /> <h2>{m.price}</h2>
                    </StyledSubCard>
                )
            })}
        </StyledSubscriptionsPage>
    )
}