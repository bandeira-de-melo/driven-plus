import styled from "styled-components";
import { BLACK } from "./constants/colors";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignUp from "./pages/SignUpPage/SignUp";
import Subscriptions from "./pages/SubscriptionsPage/Subscriptions";
import AuthContext from "./contexts/AuthContext";
import { useState } from "react";



function App() {
  const [token, setToken] = useState(null)

  function setAndPersistToken(tkn) {
		setToken(tkn);
		localStorage.setItem("token", tkn);
	}


  return (
    <AuthContext.Provider value={{token, setToken, setAndPersistToken}}>
    <BrowserRouter>
      <StyledApp>
        <Routes>
            <Route path="/" element={<LoginPage/>} />
            <Route path="/sign-up" element={<SignUp/>} />
            <Route path="/subscriptions" element={<Subscriptions/>} />
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
