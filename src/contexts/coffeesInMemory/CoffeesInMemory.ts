import { Coffee } from "../CoffeeContext";

import tradicional from '../../assets/coffeeCardImages/Tradicional.png' 
import americano from '../../assets/coffeeCardImages/Americano.png' 
import arabe from '../../assets/coffeeCardImages/Arabe.png' 
import cafeGelado from '../../assets/coffeeCardImages/CafeGelado.png' 
import cafeLeite from '../../assets/coffeeCardImages/CafeLeite.png' 
import capuccino from '../../assets/coffeeCardImages/Capuccino.png' 
import chocolateQuente from '../../assets/coffeeCardImages/ChocolateQuente.png' 
import cubano from '../../assets/coffeeCardImages/Cubano.png' 
import expressoCremoso from '../../assets/coffeeCardImages/ExpressoCremoso.png' 
import havaiano from '../../assets/coffeeCardImages/Havaiano.png' 
import irlandes from '../../assets/coffeeCardImages/Irlandes.png' 
import latte from '../../assets/coffeeCardImages/Latte.png' 
import macchiato from '../../assets/coffeeCardImages/Macchiato.png' 
import mochaccino from '../../assets/coffeeCardImages/Mochaccino.png' 

export enum TypeCoffee {
    TRADICIONAL = 'TRADICIONAL',
    GELADO = 'GELADO',
    COM_LEITE = 'COM LEITE',
    ESPECIAL = 'ESPECIAL',
    ALCOOLICO = 'ALCOÓLICO'
}

export const Coffees: Coffee[] = [
    {
        id: "1",
        title: "Expresso Tradicional",
        description: "O tradicional café feito com água quente e grãos moídos",
        image: tradicional,
        price: 9.90,
        isInCart: false,
        type: [TypeCoffee.TRADICIONAL],
        quantity: 1
    },
    {
        id: "2",
        title: "Expresso Americano",
        description: "Expresso diluído, menos intenso que o tradicional",
        image: americano,
        price: 9.90,
        isInCart: false,
        type: [TypeCoffee.TRADICIONAL],
        quantity: 1
    },
    {
        id: "3",
        title: "Árabe",
        description: "Bebida preparada com grãos de café árabe e especiarias",
        image: arabe,
        price: 9.90,
        isInCart: false,
        type: [TypeCoffee.ESPECIAL],
        quantity: 1
    },
    {
        id: "4",
        title: "Expresso Gelado",
        description: "Bebida preparada com café expresso e cubos de gelo",
        image: cafeGelado,
        price: 9.90,
        isInCart: false,
        type: [TypeCoffee.TRADICIONAL, TypeCoffee.GELADO],
        quantity: 1
    },
    {
        id: "5",
        title: "Café com Leite",
        description: "Meio a meio de expresso tradicional com leite vaporizado",
        image: cafeLeite,
        price: 9.90,
        isInCart: false,
        type: [TypeCoffee.TRADICIONAL, TypeCoffee.COM_LEITE],
        quantity: 1
    },
    {
        id: "6",
        title: "Capuccino",
        description: "Bebida com canela feita de doses iguais de café, leite e espuma",
        image: capuccino,
        price: 9.90,
        isInCart: false,
        type: [TypeCoffee.TRADICIONAL, TypeCoffee.COM_LEITE],
        quantity: 1
    },
    {
        id: "7",
        title: "Chocolate Quente",
        description: "Bebida feita com chocolate dissolvido no leite quente e café",
        image: chocolateQuente,
        price: 9.90,
        isInCart: false,
        type: [TypeCoffee.ESPECIAL, TypeCoffee.COM_LEITE],
        quantity: 1
    },
    {
        id: "8",
        title: "Cubano",
        description: "Drink gelado de café expresso com rum, creme de leite e hortelã",
        image: cubano,
        price: 9.90,
        isInCart: false,
        type: [TypeCoffee.ESPECIAL, TypeCoffee.ALCOOLICO, TypeCoffee.GELADO],
        quantity: 1
    },
    {
        id: "9",
        title: "Expresso Cremoso",
        description: "Café expresso tradicional com espuma cremosa",
        image: expressoCremoso,
        price: 9.90,
        isInCart: false,
        type: [TypeCoffee.TRADICIONAL],
        quantity: 1
    },
    {
        id: "10",
        title: "Havaiano",
        description: "Bebida adocicada preparada com café e leite de coco",
        image: havaiano,
        price: 9.90,
        isInCart: false,
        type: [TypeCoffee.ESPECIAL],
        quantity: 1
    },
    {
        id: "11",
        title: "Irlandês",
        description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
        image: irlandes,
        price: 9.90,
        isInCart: false,
        type: [TypeCoffee.ESPECIAL, TypeCoffee.ALCOOLICO],
        quantity: 1
    },
    {
        id: "12",
        title: "Latte",
        description: "Uma dose de café expresso com o dobro de leite e espuma cremosa",
        image: latte,
        price: 9.90,
        isInCart: false,
        type: [TypeCoffee.TRADICIONAL, TypeCoffee.COM_LEITE],
        quantity: 1
    },
    {
        id: "13",
        title: "Macchiato",
        description: "Café expresso misturado com um pouco de leite quente e espuma",
        image: macchiato,
        price: 9.90,
        isInCart: false,
        type: [TypeCoffee.TRADICIONAL, TypeCoffee.COM_LEITE],
        quantity: 1
    },
    {
        id: "14",
        title: "Mocaccino",
        description: "Café expresso com calda de chocolate, pouco leite e espuma",
        image: mochaccino,
        price: 9.90,
        isInCart: false,
        type: [TypeCoffee.TRADICIONAL, TypeCoffee.COM_LEITE],
        quantity: 1
    },
]