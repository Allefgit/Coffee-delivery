import { createContext, ReactNode, useEffect, useReducer } from "react";
import { Coffees, TypeCoffee } from "./coffeesInMemory/CoffeesInMemory";

import { coffeesReducer } from "../reducers/coffees/reducert";
import { addCoffeeInCartAction,
        decreaseCoffeeAmountAction,
        increaseCoffeeAmountAction,
        removeCoffeeOfCartAction,
        completeOrderAndCleanTheCartAction
    } 
        from "../reducers/coffees/actions"; 

interface CoffeeContextProvider{
    children: ReactNode
}

interface CoffeeContextType{
    coffees: Coffee[]
    coffeesInCart: Coffee[]
    quantityOfcoffeesInCart: number
    addCoffeeInCart: (newCoffeeId:string) => void
    removeCoffeeOfCart: (coffeeIdToRemove: string) => void
    increaseCoffeeAmount: (coffeeId: string) => void
    decreaseCoffeeAmount: (coffeeId: string) => void
    completeOrderAndCleanTheCart: () => void
}

export interface Coffee{
    id: string
    image: string
    type: TypeCoffee[]
    title: string
    description: string
    isInCart: boolean 
    price: number
    quantity: number
}

export const CoffeeContext = createContext({} as CoffeeContextType);

export function CoffeeContextProvider( {children}: Readonly<CoffeeContextProvider>){

    const [ {coffees} , dispatch] = useReducer(
        coffeesReducer,
        {
            coffees: Coffees,
        }, (initialState) =>{
            const newCoffees = localStorage.getItem('@coffees-delivery:coffees')
            if(newCoffees){                
                return {
                    coffees: JSON.parse(newCoffees)
                }
            }    
            return initialState
        }
    )

    const coffeesInCart = coffees.filter(coffee => {
        return coffee.isInCart === true
    })

    const quantityOfcoffeesInCart = coffeesInCart.length

    function increaseCoffeeAmount(coffeeId: string){
        dispatch(increaseCoffeeAmountAction(coffeeId, coffees))
    }

    function decreaseCoffeeAmount(coffeeId: string){
        dispatch(decreaseCoffeeAmountAction(coffeeId, coffees))
    }

    function addCoffeeInCart(updatedCoffeeId: string){
        dispatch(addCoffeeInCartAction(updatedCoffeeId, coffees))
    }

    function removeCoffeeOfCart(updatedCoffeeId:string){
        dispatch(removeCoffeeOfCartAction(updatedCoffeeId, coffeesInCart))
    }

    function completeOrderAndCleanTheCart(){
        dispatch(completeOrderAndCleanTheCartAction(Coffees))
    }

    useEffect(() =>{
        const coffeesJSON = JSON.stringify(coffees) 

        localStorage.setItem('@coffees-delivery:coffees', coffeesJSON)
    }, [coffees])
    
    return(
        <CoffeeContext.Provider
            value={
                {
                    coffees, 
                    quantityOfcoffeesInCart, 
                    coffeesInCart,
                    addCoffeeInCart, 
                    removeCoffeeOfCart,
                    increaseCoffeeAmount,
                    decreaseCoffeeAmount,
                    completeOrderAndCleanTheCart
                }
            }
        >

            { children }
        </CoffeeContext.Provider>
    )
}