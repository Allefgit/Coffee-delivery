import styled from "styled-components";


export const CoffeeCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 1.25rem 1.25rem;
    background: ${props => props.theme["base-card"]};

    align-items: center;

    border-top-right-radius: 36px;
    border-top-left-radius: 6px;
    border-bottom-left-radius: 36px;
    border-bottom-right-radius: 6px;

    gap: 1.875rem;
`

export const CoffeInfoSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: -1.25rem;
    text-align: center;

    > div {
            margin-top: 0.75rem;
            margin-bottom: 1rem;
            display: flex;
            gap: 0.5rem;

        span {
            color: ${props => props.theme["yellow-dark"]};
            background: ${props => props.theme["yellow-light"]};
            padding: 4px 8px;
            border-radius: 100px;
            font-weight: bold;
        }
    }
    
    

    > strong {
        font-family: 'Baloo 2', sans-serif;
        font-size: 1.25rem;
        color: ${props => props.theme["base-subtitle"]};
        margin-bottom: 0.5rem;
    }

    > span {
        color: ${props => props.theme["base-label"]};
    }

    > img {
        width: 7.5rem;
       
    }
`

export const BuySection = styled.section`
    display: flex;
    width: 100%;
    justify-content: space-between;
`

export const PriceSubSection = styled.span`
    color: ${props=>props.theme["base-text"]};

    > strong {
        font-family: 'Baloo 2', sans-serif;
        font-size: 2rem;
    }
`

export const SelectPriceSubSection = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

    button{
        border: 0;
        border-radius: 8px;
        padding: 10px 8px;
        background: ${props => props.theme.purple};
        color: ${props => props.theme.white};

        &:hover {
            background: ${props => props.theme["purple-dark"]};
        }
    }

    > div{
        background: ${props => props.theme["base-button"]};
        border-radius: 8px;
        font-size: 1rem;

        >button {
            border: 0;
            flex-direction: column;
            background: ${props => props.theme["base-button"]};
            color: ${props => props.theme.purple};

            &:hover{
                color: ${props => props.theme["purple-dark"]};
                background: ${props => props.theme["base-button"]};
            }
        }
    }
    
`