import { Minus, Plus, Trash } from "phosphor-react";
import { ItemActions, ItemContent, ItemDetails, ItemToByContainer } from "./style";
import { useContext } from "react";
import { CoffeeContext } from "../../../../contexts/CoffeeContext";

interface ItemToBuyProps {
    id: string
    img: string,
    title: string,
    price: number,
    qtd: number
}

export function ItemToBuy({id, img, title, qtd, price }: Readonly<ItemToBuyProps>){

    const { removeCoffeeOfCart, increaseCoffeeAmount, decreaseCoffeeAmount } = useContext(CoffeeContext)

    function handleRemoveCoffeeOfCart(){
        removeCoffeeOfCart(id)
    }

    function handleIncreaseCoffeeAmount(){
        increaseCoffeeAmount(id)
    }

    function handleDecreaseCoffeeAmount(){
        decreaseCoffeeAmount(id)
    }

    return(
        <ItemToByContainer>
            <ItemContent>   
                <img src={img} alt="" />
                <ItemDetails>
                    <span>{title}</span>
                    
                    <ItemActions>
                        <div>
                            <button onClick={handleIncreaseCoffeeAmount}> <Plus size={14} weight="bold"/> </button>
                            <span> {qtd} </span>
                            <button onClick={handleDecreaseCoffeeAmount}> <Minus size={14} weight="bold"/> </button>
                        </div>

                        <button onClick={handleRemoveCoffeeOfCart}>
                            <Trash size={16}/>
                            REMOVER
                        </button>
                    </ItemActions>
                </ItemDetails>
            </ItemContent>
            <strong>
                R$ {(price * qtd).toFixed(2)}
            </strong>
        </ItemToByContainer>
    )
}