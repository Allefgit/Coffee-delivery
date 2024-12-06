import { Coffee } from "../../contexts/CoffeeContext"

export enum CoffeeActionTypes {
    INCREASE_AMOUNT = 'INCREASE_AMOUNT',
    DECREASE_AMOUNT = 'DECREASE_AMOUNT',
    ADD_IN_CART = 'ADD_IN_CART',
    REMOVE_FROM_CART = 'REMOVE_FROM_CART',
    FINISH_ORDER = 'FINISH_ORDER'
}

export function increaseCoffeeAmountAction(coffeeId: string, coffeeList: Coffee[]){
    return{
        type: CoffeeActionTypes.INCREASE_AMOUNT,
        payload: {
            coffeeId,
            coffeeList
        }
    }
}

export function decreaseCoffeeAmountAction(coffeeId: string, coffeeList:Coffee[]){
    return{
        type: CoffeeActionTypes.DECREASE_AMOUNT,
        payload: {
            coffeeId,
            coffeeList
        }
    }
}

export function addCoffeeInCartAction(coffeeId: string, coffeeList: Coffee[]){
    return{
        type: CoffeeActionTypes.ADD_IN_CART,
        payload: {
            coffeeId,
            coffeeList
        }
    }
}

export function removeCoffeeOfCartAction(coffeeId:string, coffeeList: Coffee[]){
    return{
        type: CoffeeActionTypes.REMOVE_FROM_CART,
        payload: {
            coffeeId,
            coffeeList
        }
    }
}

export function completeOrderAndCleanTheCartAction(coffeeList: Coffee[]){
    return{
        type: CoffeeActionTypes.FINISH_ORDER,
        payload: {
            coffeeId: null,
            coffeeList
        }
    }
}