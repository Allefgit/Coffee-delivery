import { useContext } from "react";
import { ItemToBuy } from "./ItemToBuy";
import { ButtonConfirm, ConfirmSectionContainer, InfoPriceSection } from "./style";
import { CoffeeContext } from "../../../contexts/CoffeeContext";
import { v4 as uuidv4 } from "uuid";

export function ConfirmSection(){
    const { coffeesInCart } = useContext(CoffeeContext)

    const allPrice = coffeesInCart.map((item) =>{
        return item.price * item.quantity
    })

    const totPrice = allPrice.length > 0 ? allPrice.reduce((totValue, value) => {
        return totValue + value
    }, 0) : 0

    const VALUE_DELIVERY = 5.50
    const totItemsValue = totPrice.toFixed(2)
    const totOrderValue = (VALUE_DELIVERY + totPrice).toFixed(2)
    
    return (
        <ConfirmSectionContainer>
            {
                coffeesInCart.map(coffee =>{
                    return (
                        <ItemToBuy 
                            key={uuidv4()}
                            id={coffee.id}
                            img={coffee.image}
                            title={coffee.title}
                            price={coffee.price}
                            qtd={coffee.quantity}

                        />
                    )
                })
            }

            <InfoPriceSection>
                <section>
                    <span>Total dos itens</span> <span>R$ {totItemsValue}</span>
                </section>

                <section>
                    <span>Entrega</span> <span>R$ {VALUE_DELIVERY}</span>
                </section>

                <section>
                    <strong>Total dos itens</strong> <strong>R$ {totOrderValue}</strong>
                </section>
            </InfoPriceSection>

            <ButtonConfirm type="submit" >
                CONFIRMAR PEDIDO
            </ButtonConfirm>
        </ConfirmSectionContainer>
    )
}