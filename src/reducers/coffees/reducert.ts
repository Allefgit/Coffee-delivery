import { Coffee } from "../../contexts/CoffeeContext";
import { exsistsThisCoffeeInCart } from "../../utilities/coffeeUtilities";
import { CoffeeActionTypes } from "./actions";

interface CoffeeState {
    coffees: Coffee[],
}

interface Action{
    type: CoffeeActionTypes;
    payload: {
        coffeeId: string | null,
        coffeeList: Coffee[]
    };
}

export function coffeesReducer(state: CoffeeState, action: Action){
    switch(action.type){
        case CoffeeActionTypes.ADD_IN_CART:
        if(!exsistsThisCoffeeInCart(action.payload.coffeeId, action.payload.coffeeList)){
            return {
                coffees: state.coffees.map(coffee => {
                    if(coffee.id === action.payload.coffeeId){
                        return {
                            ...coffee,
                            isInCart: true
                        }
                    } 
                    return coffee
                })
            }
        } else{
            return state
        }
            
        case CoffeeActionTypes.REMOVE_FROM_CART:
        if(exsistsThisCoffeeInCart(action.payload.coffeeId, action.payload.coffeeList)){
            return {
                coffees: action.payload.coffeeList.map(coffee => {
                    if(coffee.id === action.payload.coffeeId){
                        return {
                            ...coffee,
                            isInCart: false
                        }
                    } 
                    return coffee
                })
            }
        } else{
            return state
        }

        case CoffeeActionTypes.DECREASE_AMOUNT:
            return {
                coffees: action.payload.coffeeList.map(coffee => {
                    if (coffee.id === action.payload.coffeeId && coffee.quantity > 1) {
                        return {
                            ...coffee,
                            quantity: coffee.quantity - 1
                        };
                    }
                    return coffee;
                }),
            };

        case CoffeeActionTypes.INCREASE_AMOUNT:
            return {
                coffees: action.payload.coffeeList.map(coffee => {
                    if (coffee.id === action.payload.coffeeId) {
                        return {
                            ...coffee,
                            quantity: coffee.quantity + 1
                        };
                    }
                    return coffee;
                }),
            };

            case CoffeeActionTypes.FINISH_ORDER:
                return {
                    coffees: action.payload.coffeeList
                }
        default:
            return state
    }
}