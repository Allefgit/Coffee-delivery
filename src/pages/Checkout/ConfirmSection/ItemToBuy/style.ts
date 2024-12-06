import styled from "styled-components";


export const ItemToByContainer = styled.div`
    flex: 1;
    display: flex;
    justify-content: space-between;
      
    border-bottom: 1px solid ${props => props.theme["base-button"]};
    padding-bottom: 2rem;
    margin-bottom: 2rem;

    > strong {
        color: ${props => props.theme["base-text"]};
    }
`

export const ItemContent = styled.div`
    display: flex;
    gap: 1.25rem;

    img{
        width: 4rem;
    } 

`

export const ItemDetails = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    >span{
        color: ${props => props.theme["base-subtitle"]};
    }
`

export const ItemActions = styled.div`
    display: flex;
    gap: 0.5rem;

    button {
        background: transparent;
        border: 0;
        display: flex;
        align-items: center;

        svg{
            color: ${props => props.theme.purple}
        }
    }

    >div{
        background: ${props => props.theme["base-button"]};
        border-radius: 8px;

        font-size: 1rem;
        padding: 5px;

        display: flex;
        gap: 10px;
    }

    >button{
        display: flex;
        gap: 5px;
        padding: 5px;
        background: ${props => props.theme["base-button"]};
        color: ${props => props.theme["base-text"]};
        font-size: 0.75rem;
        border-radius: 8px;
    }
`
