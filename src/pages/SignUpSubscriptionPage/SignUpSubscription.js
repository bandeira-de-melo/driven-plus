import { Input, InputSmall, InputSubmit, StyledSignUpSubscriptionPage, StyledSubPerks, StyledSubscriptionForm } from "./SignUpSubscriptionsStyle";
import ArrowBack from "../../assets/images/arrow-back.svg"
import { useContext, useState } from "react";
import AuthContext from "../../contexts/AuthContext";
import PERKICON from "../../assets/images/perks-icon.svg"
import BILLICON from "../../assets/images/bill-icon.svg"
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function SignUpSubscription() {
    const navigate = useNavigate()
    const {subscription, userData, setUserData, token} = useContext(AuthContext)
    const [cardName, setCadName ]=useState("")
    const [cardNumber, setCardNumber ]=useState("")
    const [securityNumber, setSecurityNumber]=useState("")
    const [expirationDate, setExpirationDate]=useState("")

    function subscribe(e){
        e.preventDefault()
        setUserData({"membershipId": subscription.id, cardName, cardNumber, securityNumber, expirationDate})
        console.log(userData)
        const URL = "https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions"
        axios.post(
            URL, 
            userData,{
                headers: {
                    'Authorization': `Bearer ${token}` 
                  } 
            })
            .then(res => navigate("/home"))
            .catch(err => alert(err.message))
    }

  
  

    return(
        <StyledSignUpSubscriptionPage>
            <div><img src={ArrowBack} alt="" onClick={()=>{navigate("/subscriptions")}}/></div>
            <img src={subscription.image} alt=""/>
            <h1>{subscription.name}</h1>
            <StyledSubPerks>
                <h2><img src={PERKICON} alt=""/>Benefícios:</h2>
                <ol>
                    {subscription.perks.map(perk => {
                        return <li key={perk.id}>{perk.title}</li>
                    })}
                </ol>
                <h2><img src={BILLICON} alt=""/>Preço:</h2>
                <p>R$ {subscription.price} cobrados mensalmente</p>
            </StyledSubPerks>

            <StyledSubscriptionForm onSubmit={subscribe}>
                <Input type="text" value ={cardName} name="cardName" placeholder="Nome impresso no cartão" onChange={e => setCadName(e.target.value)} required/>
                <Input type="text" value ={cardNumber} name="cardNumber" placeholder="Digitos do cartão" onChange={e =>  setCardNumber(e.target.value)} required/>
                <InputSmall type="number" value={securityNumber} name="securityNumber"   placeholder="Código de Segurança" onChange={ e => setSecurityNumber(e.target.value)} required/>
                <InputSmall type="text" value={expirationDate} name="expirationDate" placeholder="Validade" onChange={e => setExpirationDate(e.target.value)} required/>
                <InputSubmit type="submit" value="ASSINAR"/>


            </StyledSubscriptionForm>

        </StyledSignUpSubscriptionPage>
    )
}