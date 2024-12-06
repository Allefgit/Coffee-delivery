import styled from "styled-components";

export const PaymentSectionContainer = styled.div `

    padding: 2.5rem;
    background: ${props => props.theme["base-card"]};
`

export const InfoHeaderSection = styled.div `
    
    display: flex;
    margin-bottom: 2rem;
    gap: 0.5rem;

    svg{
        color: ${props => props.theme.purple};
    }

    >section{
        display: flex;
        flex-direction: column;

        strong {
            line-height: 1.3;
            font-size: 1rem;
            font-weight: normal;
            color: ${props => props.theme["base-subtitle"]};

            span {
                color: ${props => props.theme.danger};
            }
        }

        span {
            font-size: 0.75rem;
            color: ${props => props.theme["base-text"]};
        }
    }
`

export const PaymentOptionsSection = styled.fieldset`
    display: flex;
    border: 0;
    gap: 0.75rem;
    

    input {
        display: none;
    }

    input[type="radio"]:checked + label{
        border: 1px solid ${props => props.theme.purple};
        background: ${props => props.theme["purple-light"]}
    }
`

export const PaymentOption = styled.label`
    display: flex;
    flex: 1;
    gap: 0.75rem; 

    padding: 1rem;
    background: ${props => props.theme["base-button"]};

    align-items: center;
    border: 1px solid transparent;
    border-radius: 8px;

    svg {
        color: ${props => props.theme.purple};
    }

    &:hover{
        cursor: pointer;
        background: ${props => props.theme["base-hover"]};
    }
    
`