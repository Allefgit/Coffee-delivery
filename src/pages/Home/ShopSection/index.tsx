import { useContext } from "react";
import { CoffeeCard } from "../../../components/CoffeeCard";
import { ShopContent, ShopSectionContainer } from "./style";
import { CoffeeContext } from "../../../contexts/CoffeeContext";


export function ShopSection(){

    const {coffees} = useContext(CoffeeContext)

    return(
        <ShopSectionContainer>
            <h1>Nossos cafés</h1>

            <ShopContent>
                {
                    coffees.map(coffee => {
                    return(
                    <CoffeeCard 
                        key={coffee.id}
                        id={coffee.id}
                        title={coffee.title}
                        description={coffee.description}
                        img={coffee.image}
                        qtd={coffee.quantity}
                        price={coffee.price}
                        tags={coffee.type}
                    />)
                    })
                }
            </ShopContent>
        </ShopSectionContainer>
        

    )
}