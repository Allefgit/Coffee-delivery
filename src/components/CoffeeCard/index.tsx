import { Minus, Plus, ShoppingCart } from "phosphor-react";
import { BuySection, CoffeeCardContainer, CoffeInfoSection, PriceSubSection, SelectPriceSubSection } from "./style";
import { useContext } from "react";
import { CoffeeContext } from "../../contexts/CoffeeContext";
import { v4 as uuidv4 } from 'uuid';

interface CoffeeCardProps {
    id: string,
    img: string,
    tags: string[],
    title: string,
    description: string,
    price: number,
    qtd: number
}

export function CoffeeCard({id, img, tags, title, description, price, qtd}: Readonly<CoffeeCardProps>){
    
    const { addCoffeeInCart, decreaseCoffeeAmount, increaseCoffeeAmount } = useContext(CoffeeContext)

    function handleAddConffeeInCart(){
        addCoffeeInCart(id)
    }

    function handleIncreaseCoffeeAmount(){
        increaseCoffeeAmount(id)
    }

    function handleDecreaseCoffeeAmount(){
        decreaseCoffeeAmount(id)
    }

    return(
        <CoffeeCardContainer>
            <CoffeInfoSection>
                <img src={img} alt="" />

                <div>
                    {
                        tags.map(tag =>{
                            return <span key={uuidv4()}> {tag}</span>
                        })
                    }
                </div>

                <strong>{title}</strong>

                <span>{description}</span>

            </CoffeInfoSection>

            <BuySection>
                <PriceSubSection>R$ <strong>{price.toFixed(2)}</strong> </PriceSubSection>
                
                <SelectPriceSubSection>
                    <div>
                        <button onClick={handleIncreaseCoffeeAmount}> <Plus size={12} weight="bold"/> </button>
                        <span> {qtd} </span>
                        <button onClick={handleDecreaseCoffeeAmount}> <Minus size={12} weight="bold"/> </button>
                    </div>
                    

                    <button onClick={handleAddConffeeInCart}>
                        <ShoppingCart size={15} weight="fill"/>
                    </button>
                </SelectPriceSubSection>
                
            </BuySection>
        </CoffeeCardContainer>
    )
}