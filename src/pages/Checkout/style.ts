import styled from "styled-components";

export const CheckoutContainer = styled.form`
    display: grid;
    grid-template-columns: 2fr 1fr;
    justify-content: space-between;
    flex: 1;
    gap: 2.75rem;

    >div h2 {
        font-size: 1.125rem;
        font-weight: bold;
        font-family: 'Baloo 2', sans-serif;

        margin-bottom: 1rem;
    }
`