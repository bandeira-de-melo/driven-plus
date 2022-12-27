import styled from "styled-components";
import { BLACK } from "./constants/colors";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignUp from "./pages/SignUpPage/SignUp";
import HomePage from "./pages/HomePage/HomePage";
import Subscriptions from "./pages/SubscriptionsPage/Subscriptions";
import AuthContext from "./contexts/AuthContext";
import { useState } from "react";
import SignUpSubscription from "./pages/SignUpSubscriptionPage/SignUpSubscription";




function App() {
  const [token, setToken] = useState(null)
  const [subscription, setSubscription] = useState({})
  const [userData, setUserData ] = useState({})
  const [memberships, setMemberships] = useState(null)
  const [user, setUser]= useState({})

  
  

  function setAndPersistToken(tkn) {
		setToken(tkn);
		localStorage.setItem("token", tkn);
    console.log(localStorage.getItem("token"))
	}


  return (
    <AuthContext.Provider 
    value={{
    user, setUser,
    token, 
    setToken,
    memberships, 
    setMemberships, 
    setAndPersistToken, 
    subscription,
    setSubscription, 
    userData, 
    setUserData}}>
    <BrowserRouter>
      <StyledApp>
        <Routes>
            <Route path="/" element={<LoginPage/>} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/sign-up" element={<SignUp/>} />
            <Route path="/subscriptions" element={<Subscriptions/>} />
            <Route path="/subscriptions/:id" element={<SignUpSubscription />} />
        </Routes>
      </StyledApp>
    </BrowserRouter>
    </AuthContext.Provider>
    
  );
}

export default App;

const StyledApp = styled.div`
  width: 375px;
  height: 666.91px;
  background-color: ${BLACK};
`
