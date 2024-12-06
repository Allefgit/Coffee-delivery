import { MapPinLine } from "phosphor-react";
import { DivInput, EdressSectionContainer, FormSection, InfoHeaderSection, TextInput } from "./style";
import { useFormContext } from "react-hook-form";
import InputMask from 'react-input-mask'
import { findAddressByZipCode } from "../../../utilities/addressUtilities";
export function EdressSection(){
    
    const { register, 
            watch, 
            setValue, 
            getValues, 
            formState: { errors }, 
            setError 
        } = useFormContext()
    
    const userZipCode:string = watch('zipcode')
    const street = getValues('street')
    const city = getValues('city')
    const uf = getValues('uf')
    const neighborhood = getValues('neighborhood')

    const existsZipMessageError = errors.zipcode?.message ? true : undefined
    const existsNumberMessageError = errors.number?.message ? true : undefined


    async function handleValidateZipCode(){
        const addressByZipCode = await findAddressByZipCode(userZipCode)
           
        if(addressByZipCode.erro){
            setError('zipcode', {type: 'custom', message: 'Cep Inválido'})
        } else{
            setValue('street', addressByZipCode.logradouro)
            setValue('city', addressByZipCode.localidade)
            setValue('uf', addressByZipCode.uf)
            setValue('neighborhood', addressByZipCode.bairro)            
        }
    }

    return (        
        <EdressSectionContainer>
            <InfoHeaderSection>
                <MapPinLine size={20}/>

                <section>
                    <strong>Endereço de Entrega</strong>
                    <span>Informe o endereço onde deseja receber seu pedido</span>
                </section>
            </InfoHeaderSection>

            <FormSection>

                <DivInput $gridareaposition="cep" $iserrormessagetrue={existsZipMessageError}>
                    <InputMask 
                        {...register('zipcode')}
                        onBlur={handleValidateZipCode}
                        mask="99999-999"
                    >
                        {() => <TextInput {...register('zipcode')} onBlur={handleValidateZipCode} $gridareaposition = 'cep' placeholder="CEP"></TextInput>}
                    </InputMask>
                    <span> {typeof errors.zipcode?.message === "string" ? errors.zipcode.message : null} </span>
                </DivInput>
                
                <TextInput {...register('street')} $gridareaposition = 'rua' placeholder="Rua" value={street} disabled></TextInput>
                
                <DivInput $gridareaposition="numero" $iserrormessagetrue={existsNumberMessageError}>
                    <TextInput {...register('number')} $gridareaposition = 'numero'  placeholder="Número"></TextInput>
                    <span> {typeof errors.number?.message === "string" ? errors.number.message : null} </span>
                </DivInput>

                <TextInput {...register('complement')} $gridareaposition = 'complemento' placeholder="Complemento"></TextInput>
                
                <TextInput {...register('neighborhood')} $gridareaposition = 'bairro' placeholder="Bairro" value={neighborhood} disabled></TextInput>
                
                <TextInput {...register('city')} $gridareaposition = 'cidade' placeholder="Cidade" value={city} disabled></TextInput>
                
                <TextInput {...register('uf')} $gridareaposition = 'uf' placeholder="UF" value={uf} disabled></TextInput>
            </FormSection>
        </EdressSectionContainer>
    )
}