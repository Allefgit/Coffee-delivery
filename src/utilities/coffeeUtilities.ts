import { Coffee } from "../contexts/CoffeeContext"


export function exsistsThisCoffeeInCart(coffeeId: string | null, coffeeListToValid: Coffee[]): boolean{
        
    const coffee = coffeeListToValid.find(coffee => {
        return coffee.id === coffeeId
    })

    if(!coffee || coffee.isInCart === false){
        return false
    }

    return true
}