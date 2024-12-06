import { Bank, CreditCard, CurrencyDollar, Money } from "phosphor-react";
import { InfoHeaderSection, PaymentOption, PaymentOptionsSection, PaymentSectionContainer } from "./style";
import { useFormContext } from "react-hook-form";
export function PaymentSection(){

    const { register, formState: { errors }} = useFormContext()
    const paymentTypeErrorMessage = typeof errors.paymentType?.message === 'string' ? errors.paymentType.message : null

    return (
        <PaymentSectionContainer>
            <InfoHeaderSection>
                <CurrencyDollar size={20}/>

                <section>
                    <strong> Pagamento <span> {paymentTypeErrorMessage} </span> </strong>
                    <span>O pagamento é feito na entrega. Escolha a forma que deseja pagar</span>
                </section>
            </InfoHeaderSection>

            <PaymentOptionsSection>
                    <input {...register("paymentType")} value="Cartão de crédito" type="radio" id="icredit"/>
                    <PaymentOption htmlFor="icredit"> <CreditCard/> CARTÃO DE CRÉDITO</PaymentOption>                    

                    <input {...register("paymentType")} value="Cartão de débito" type="radio" id="idebit"/>
                    <PaymentOption htmlFor="idebit"><Bank /> CARTÃO DE DÉBITO</PaymentOption>                    
                
                    <input {...register("paymentType")} value="Dinheiro" type="radio" id="imoney"/>
                    <PaymentOption htmlFor="imoney"><Money /> DINHEIRO</PaymentOption>
            </PaymentOptionsSection>
        </PaymentSectionContainer>
    )
}