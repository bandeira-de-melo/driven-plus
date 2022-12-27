import { useContext, useEffect } from "react";
import AuthContext from "../../contexts/AuthContext";
import { CancelButton, ChangeMSButton, PerkButton, StyledHomeHeader, StyledHomePage } from "./HomePageStyle";
import USERICON from "../../assets/images/user-icon.svg"
import { Link } from "react-router-dom";


export default function HomePage() {
    const {userMembership} = useContext(AuthContext)
    return(
        <StyledHomePage>
            <StyledHomeHeader>
                <h1><img src={userMembership.image} alt=""/>  <img src={USERICON} alt=""/></h1>
                <h2>Olá, fulano</h2>
            </StyledHomeHeader>
            {userMembership.perks.map(perk => {
                return  (
                        <PerkButton href={perk.link}>
                            <p>{perk.title}</p>
                        </PerkButton>
                        )
            })} 
            <footer>
                <Link to="/subscriptions">
                    <ChangeMSButton>
                        <p>Mudar plano</p>
                    </ChangeMSButton>
                </Link>
                <CancelButton>
                    <p>Cancelar plano</p>
                </CancelButton>
            </footer> 
        </StyledHomePage>
    )
}