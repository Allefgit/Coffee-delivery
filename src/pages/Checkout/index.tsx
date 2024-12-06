import { FormProvider, useForm } from "react-hook-form";
import { ConfirmSection } from "./ConfirmSection";
import { EdressSection } from "./EdressSection";
import { PaymentSection } from "./PaymentSection";
import { CheckoutContainer } from "./style";

import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { OrderContext } from "../../contexts/OrderContext";

import { useNavigate } from "react-router-dom";
import { CoffeeContext } from "../../contexts/CoffeeContext";
import { newOrderFormData, newOrderValidationSchema } from "../../utilities/zodValidationOrder";

export function Checkout(){
    const methods = useForm<newOrderFormData>({
        resolver: zodResolver(newOrderValidationSchema),
    })

    const { handleSubmit, 
            watch, 
            getValues
        } = methods

    const { addOrder } = useContext(OrderContext)
    const { quantityOfcoffeesInCart, completeOrderAndCleanTheCart } = useContext(CoffeeContext)
    const navigate = useNavigate()

    const actualAddress = {
        number: watch('number'),
        complement: watch('complement'),
        paymentType: watch('paymentType'),
        zipcode: watch('zipcode'),
        street: getValues('street'),
        city: getValues('city'),
        uf: getValues('uf'),
        neighborhood: getValues('neighborhood')
    }
    
    function handleCleanCart(){
        completeOrderAndCleanTheCart()
    }

    function completeOrderAndShowSuccessMessage(){


        addOrder(actualAddress)
        navigate("/success")
        handleCleanCart()
    }

    function handleSubmitFormData(){
        const isCartNotEmpty = quantityOfcoffeesInCart > 0
        
        if(isCartNotEmpty)          
            completeOrderAndShowSuccessMessage()
        else
            window.alert("Selecione algum item para finalizar a compra!")
    }

    return (
        <FormProvider {...methods}>
            <CheckoutContainer onSubmit={handleSubmit(handleSubmitFormData)}>
                <div>
                    <h2>Complete seu pedido</h2>

                    <EdressSection/>
                    <PaymentSection/>
                </div>
                <div>   
                    <h2>Complete seu pedido</h2>
                    <ConfirmSection />
                </div>
            </CheckoutContainer>
        </FormProvider>
    )
}