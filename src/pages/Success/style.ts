import styled from "styled-components";


export const SuccessContainer = styled.div`
    display: flex;
    flex-direction: column;

    margin-top: 5rem;
`

export const TitleSection = styled.section`
    margin-bottom: 2.5rem;

    h1{
        color: ${props => props.theme["yellow-dark"]};
        font-size: 2rem;
        font-weight: bold;
        line-height: 1.3;
    }

    span{
        color: ${props => props.theme["base-subtitle"]};
        font-size: 1.25rem;
        line-height: 1.3;
    }
`

export const ContentSection = styled.section`
    display: flex;
    justify-content: space-between;
`

export const FullInfoContent = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 6px 36px; 

    background: ${props => props.theme.white}; 
    padding: 2.5rem;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const BorderGradient = styled.div`
    min-width: 526px;

    border: 1px solid;
    border-radius: 6px 36px;
    border-color: transparent;

    background-origin: border-box;
    background-image: ${(props) => `linear-gradient(to bottom right, ${props.theme.yellow}, ${props.theme.purple})`};
`

export const Content =  styled.div<ContentProps>`
    display: flex;
    gap: 0.75rem;

    > div{
        display: flex;
        flex-direction: column;
    }
        

    > svg{
        color: ${props => props.theme.white};
        padding: 8px;
        background: ${props => props.theme[BACKGROUND_ICON_COLOR[props.backgrundIconColor]]};
        display: flex;

        align-items: center;
        border-radius: 100%;
        box-sizing: content-box;
    }
`

const BACKGROUND_ICON_COLOR = {
    map: 'purple',
    timer: 'yellow',
    dollar: 'yellow-dark',
} as const

interface ContentProps {
    backgrundIconColor: keyof typeof BACKGROUND_ICON_COLOR
}