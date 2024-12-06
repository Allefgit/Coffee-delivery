import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import { BorderGradient, Content, ContentSection, FullInfoContent, SuccessContainer, TitleSection } from "./style";
import finalizationImg from '../../assets/ImgForFinalization.png'
import { useContext } from "react";
import { OrderContext } from "../../contexts/OrderContext";


export function Success(){

    const { order } = useContext(OrderContext)

    return(
        <SuccessContainer>
            <TitleSection>
                <h1>Uhu! Pedido confirmado</h1>
                <span>Agora é só aguardar que logo o café chegará até você</span>
            </TitleSection>

            <ContentSection>
                <BorderGradient>
                    <FullInfoContent>

                        <Content backgrundIconColor="map">
                            <MapPin weight="fill"/> 
                            <div>
                                <span> Entrega em <strong>{order.street}, {order.number}</strong></span>
                                <span>{order.neighborhood} - {order.city}, {order.uf}</span>
                            </div>
                        </Content>

                        <Content backgrundIconColor="timer">  
                            <Timer weight="fill"/> 
                            <div>
                                <span> Previsão de entrega</span>
                                <strong>20 min - 30 min </strong>
                            </div>
                        </Content>

                        <Content backgrundIconColor="dollar">
                            <CurrencyDollar weight="fill"/> 
                            <div>
                                <span> Pagamento na entrega </span>
                                <strong>{order.paymentType}</strong>
                            </div>
                        </Content>

                    </FullInfoContent>
                </BorderGradient>
                <img src={finalizationImg} alt="" />
            </ContentSection>
            
        </SuccessContainer>
    )
}