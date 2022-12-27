import styled from "styled-components"
import { BLACK } from "../../constants/colors"

export const StyledSubscriptionsPage = styled.div`
    width: 100%;
    height: 100%;
    background-color: ${BLACK};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #fff;
    gap: 10px;
    h1{
        font-size: 26px;
        font-weight: 700;
        margin-bottom: 14px;
    }
`
export const StyledSubCard = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 16px;
    align-items: center;
    width: 290px;
    height: 180px;
    border: 3px solid #7E7E7E;
    border-radius: 12px;
    
    h2{
        font-size: 20px;
        font-weight: 700;
    }
    
`