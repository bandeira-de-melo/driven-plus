import styled from "styled-components"
import { BLACK, PINKDRIVEN } from "../../constants/colors"

export const StyledSignUpSubscriptionPage= styled.div`
  width: 100%;
  height: 100%;
  background-color: ${BLACK};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  justify-content: center;
  color: #fff;
  div {
    width: 100%;
    height: 87px;
    display: flex;
    align-items: center;
    padding: 0 22px;
    img{
      cursor: pointer;
    }

  }
  h1{
    font-size: 32px;
    font-weight: 700;
    margin-top: 10px;
  }
`
export const StyledSubPerks = styled.div`
    width: 100%;
    margin: 10px 40px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    h2{
        margin-top: 20px;
        display: flex;
        justify-content: flex-start;
    }
`

export const StyledSubscriptionForm = styled.form`
    margin: 60px 40px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 16px; 
`
export const Input = styled.input`
    width: 100%;
    height: 52px;
    border: none;
    border-radius: 8px;
    padding: 18px 14px;
    &::placeholder{
        font-size: 14px;
        color: #7E7E7E;
    }
`
export const InputSmall = styled.input`
    width: 47%;
    height: 52px;
    border: none;
    border-radius: 8px;
    padding: 18px 14px;
    &::placeholder{
        font-size: 14px;
        color: #7E7E7E;
    }
`
export const InputSubmit = styled.input`
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