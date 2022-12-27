import { useContext} from "react";
import AuthContext from "../../contexts/AuthContext";
import { CancelButton, ChangeMSButton, PerkButton, StyledHomeHeader, StyledHomePage } from "./HomePageStyle";
import USERICON from "../../assets/images/user-icon.svg"
import { Link } from "react-router-dom";


export default function HomePage() {
   
    const {subscription, user} = useContext(AuthContext)
  
    return(
        <StyledHomePage>
            <StyledHomeHeader>
                <h1><img src={subscription.image} alt=""/>  <img src={USERICON} alt=""/></h1>
                <h2>Olá, {user.name}</h2>
            </StyledHomeHeader>
            {subscription.perks.map(perk => {
                return  (
                        <PerkButton href={perk.link} key={perk.id}>
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