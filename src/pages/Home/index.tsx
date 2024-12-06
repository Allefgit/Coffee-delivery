import { InfoSection } from "./InfoSection";
import { ShopSection } from "./ShopSection";
import { HomeContainer } from "./style";

export function Home(){
    return (
        <HomeContainer>
            <InfoSection/>
            <ShopSection/>
        </HomeContainer>
        
    )
}