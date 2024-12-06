import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import { ImageContainer, InfoSectionContainer, Item, Items, TextContainer, Title } from './style'
import coffeeImage from '../../../assets/coffeeImageInfo.png'

export function InfoSection(){
    return (
        <InfoSectionContainer>
            <TextContainer>
                <Title>
                    <h1>Encontre o café perfeito para qualquer hora do dia</h1>
                    <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
                </Title>
                <Items>
                    <Item backgroundIconColor='orange'> <ShoppingCart weight='fill' size={12}/> Compra simples e segura </Item>
                    <Item backgroundIconColor='gray'> <Package weight='fill' size={12}/> Embalagem mantém o café intacto </Item>
                    <Item backgroundIconColor='purple'> <Coffee weight='fill' size={12}/> Entrega rápida e rastreada </Item>
                    <Item backgroundIconColor='yellow'> <Timer weight='fill' size={12}/> O café chega fresquinho até você </Item>
                </Items>
            </TextContainer>
            <ImageContainer>
                <img src={coffeeImage} alt="" />
            </ImageContainer>
        </InfoSectionContainer>
    )
}