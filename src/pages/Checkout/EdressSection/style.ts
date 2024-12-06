import styled from "styled-components";

export const EdressSectionContainer = styled.div `
    display: flex;
    flex-direction:column;
    flex: 1;
    padding: 2.5rem;
    background: ${props => props.theme["base-card"]};
    margin-bottom: 0.75rem;
`

export const InfoHeaderSection = styled.div `
    
    display: flex;
    margin-bottom: 2rem;
    gap: 0.5rem;

    svg{
        color: ${props => props.theme["yellow-dark"]};
    }

    >section{
        display: flex;
        flex-direction: column;

        strong {
            line-height: 1.3;
            font-size: 1rem;
            font-weight: normal;
            color: ${props => props.theme["base-subtitle"]};
        }

        span {
            font-size: 0.75rem;
            color: ${props => props.theme["base-text"]};
        }
    }
`


interface FormGridProps {
    $gridareaposition: |'cep' | 'rua' | 'numero' | 'complemento' |  'bairro' | 'cidade' |'uf'
    $iserrormessagetrue?: boolean
}

export const FormSection = styled.div`
    row-gap: 1rem;
    gap: 0.75rem;
    display: grid;
    grid-template-areas: 
    "cep cep 0 0 0"
    "rua rua rua rua rua"
    "numero numero complemento complemento complemento"
    "bairro bairro cidade cidade uf";

    grid-template-columns: repeat(4, 2fr) 1fr;
`

export const DivInput = styled.div <FormGridProps>`
    grid-area: ${props => props.$gridareaposition};

    span{
        font-size: 0.75rem;
        margin-left: 0.75rem;
        margin-top: 0.3rem;

        color: ${props => props.theme.danger};
        display: ${props => props.$iserrormessagetrue ? 'block' : 'none'};
        
    }
`

export const TextInput = styled.input<FormGridProps>`
    
    width: 100%;
    max-height: 43px;

    grid-area: ${props => props.$gridareaposition};
    padding: 0.75rem;
    border-radius: 4px;
    resize: none;
    border: 0;
    
    vertical-align: vertical-rl;
    background: ${props => props.theme["base-input"]};
    color: ${props => props.theme["base-label"]};

    &:disabled{
        background: ${props => props.theme["base-button"]};
    }

    &:disabled:hover{
        cursor: not-allowed;
    }

    &:focus{
        border: 1px solid ${props => props.theme["yellow-dark"]};
        box-shadow: none;
    }
` 