import { NavLink } from "react-router-dom";
import { HeaderContainer } from "./style";

import { MapPin, ShoppingCart } from 'phosphor-react'

import coffeeLogo from '../../assets/coffeeLogo.svg'
import { CoffeeContext } from "../../contexts/CoffeeContext";
import { useContext } from "react";

export function Header(){

    const { quantityOfcoffeesInCart } = useContext(CoffeeContext);
    
    return(
        <HeaderContainer>
            <NavLink to='/'>
                <img src={coffeeLogo} alt="Button to go home page" />
            </NavLink>
            <nav>
                <span> <MapPin size={19} weight="fill"/>  Cubatão, SP</span>
                <NavLink to='/checkout'>
                    <ShoppingCart size={19} weight="fill"/>
                    <span> {quantityOfcoffeesInCart} </span>
                </NavLink>
            </nav>
        </HeaderContainer>
    )
}