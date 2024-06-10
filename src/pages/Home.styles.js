import styled from "styled-components"

export const CardContiner = styled.div`
    background: ${props => props.theme.CardContiner};
    max-width: 41.2rem;
    padding: 3.2rem;
    border-radius: 3rem;

    h1{
      font-size: 2.8rem;
      color: $(props => props.theme.white);
      margin-botton: 1.5rem;
       text-align: center;
    }

    p{
       font-size: 1.5rem;
       line-height: 2.4rem;
       color: $(props => props.theme.textColor);
       text-align: center; 
    }
`

export const IconContainer = style.div``

export const ButtonContainer = styled.div``