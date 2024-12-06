import styled from "styled-components";

export const HeaderContainer = styled.header`

    display: flex;
    flex: 1;
    justify-content: space-between;
    align-items: center;

    padding: 2rem 0;

    nav{
        display: flex;
        gap: 0.8rem;

        span {
            display: flex;
            color: ${props => props.theme.purple};
            background: ${props => props.theme["purple-light"]};
            padding: 0.5rem;
            gap: 0.62px;

            border-radius: 8px;
        }

        a {
            display: flex;
            color: ${props => props.theme.yellow};
            background: ${props => props.theme["yellow-light"]};
            padding: 0.5rem;
            position: relative;
            border-radius: 8px;

            span{
                align-items: center;
                justify-content: center;
                
                position: absolute;
                top: -5px;
                right: -5px;

                background: ${props => props.theme["yellow-dark"]};
                border-radius: 100%;
                
                width: 20px;
                height: 20px;

                color:  ${props => props.theme.white};
                font-size: 0.75rem;
                font-weight: bold;
            }
        }
    }
`