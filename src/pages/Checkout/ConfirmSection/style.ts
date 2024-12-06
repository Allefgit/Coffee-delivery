import styled from "styled-components";

export const ConfirmSectionContainer = styled.div `
    display: flex;
    flex-direction:column;
    flex: 1;
    padding: 2.5rem;
    background: ${props => props.theme["base-card"]};
    border-radius: 6px 36px 6px 36px;
`

export const InfoPriceSection = styled.div`

    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    margin-bottom: 2rem;

    span{
        font-size: 0.875rem;
        color: ${props => props.theme["base-text"]};
    }

    strong{
        font-size: 1.25rem;
        color: ${props => props.theme["base-subtitle"]};
    }

    > section{
        display: flex;
        justify-content: space-between;
    }
`

export const ButtonConfirm = styled.button`
    padding: 0.75rem 0;
    display: flex;
    justify-content: center;
    border: 0;

    border-radius: 8px;

    color: ${props => props.theme.white};
    text-decoration: none;
    background: ${props => props.theme.yellow};

    &:hover{
        cursor: pointer;
        background: ${props => props.theme["yellow-dark"]};
    }
`