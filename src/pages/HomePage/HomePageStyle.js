import styled from "styled-components"
import { BLACK, PINKDRIVEN, RED } from "../../constants/colors"

export const StyledHomePage = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${BLACK};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
    color: #fff;

  footer{
    display: flex;
    flex-direction:column;
    align-items: center;
    padding-top: 20px ;
  }
`
export const StyledHomeHeader = styled.header`
  width: 100%;
  height: 176px;
  display: flex;
  flex-direction: column;
  h1{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 40px;
    
  }
  h2{
    display: flex;
    justify-content: center;
    padding-top: 20px;
    font-size: 26px;
  }
`

export const PerkButton = styled.a`
    display: block;
    margin-top: 8px;
    width: 299px;
    height: 52px;
    border: none;
    border-radius: 8px;
    padding: 18px 14px;
    font-size: 18px;
    font-weight: 700;
    color: #fff;
    background-color: ${PINKDRIVEN};
`
export const ChangeMSButton = styled.button`
    margin-top: 8px;
    width: 299px;
    height: 52px;
    border: none;
    border-radius: 8px;
    padding: 18px 14px;
    font-size: 18px;
    font-weight: 700;
    color: #fff;
    background-color: ${PINKDRIVEN};
`
export const CancelButton =  styled.button`
margin-top: 8px;
width: 299px;
height: 52px;
border: none;
border-radius: 8px;
padding: 18px 14px;
font-size: 18px;
font-weight: 700;
color: #fff;
background-color: ${RED};
`