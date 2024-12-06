import styled from "styled-components";

export const ShopSectionContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;

    > h1{
        margin-bottom: 3.375rem;
    }
`

export const ShopContent = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
    row-gap: 2.5rem;    
`