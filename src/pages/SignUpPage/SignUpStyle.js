import styled from "styled-components"
import { BLACK, PINKDRIVEN } from "../../constants/colors"

export const StyledSignUpPage= styled.div`
  width: 100%;
  height: 100%;
  background-color: ${BLACK};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const FormSignUpPage = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
`
export const Input = styled.input`
    width: 299px;
    height: 52px;
    border: none;
    border-radius: 8px;
    padding: 18px 14px;
    &::placeholder{
        font-size: 14px;
        color: #7E7E7E;
    }
`
export const SignUpSubmit = styled.input`
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