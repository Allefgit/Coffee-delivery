import styled from "styled-components";

export const InfoSectionContainer = styled.div`
    display: grid;
    flex: 1;
    grid-template-columns: 1fr max-content;
    justify-content: space-between;
`

export const TextContainer = styled.section`
    display: flex;
    flex-direction: column;
    row-gap: 4.125rem;
`

export const Title = styled.section`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    h1{
        font-family: "Baloo 2", sans-serif;
        font-size: 3rem;
        line-height: 1.3;
        font-weight: bold;
    }

    p{
        font-size: 1.25rem;
        line-height: 1.3;
    }
`

export const Items = styled.section`
    display: grid;
    grid-template-areas: 
    "orange gray"
    "yellow purple";
    row-gap: 1.25rem;
`

export const Item = styled.span<StatusProps>`

    display: flex;
    grid-area: ${props => props.backgroundIconColor};
    align-items: center;
    gap: 0.75rem;


    svg {
        color: ${props => props.theme.white};
        border-radius: 9999px;
        background: ${props=>props.theme[BACKGROUND_COLOR[props.backgroundIconColor]]};
        padding: 8px;
        box-sizing: content-box;
    }
`

export const ImageContainer = styled.div`
    display:flex;
    justify-content: end;

    img{
        width: 100%;
        object-fit: cover
    }
`

const BACKGROUND_COLOR = {
    orange: 'yellow-dark',
    yellow: 'yellow',
    gray: 'base-text',
    purple: 'purple',
} as const

interface StatusProps {
    backgroundIconColor: keyof typeof BACKGROUND_COLOR
}