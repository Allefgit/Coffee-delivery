import { ThemeProvider } from "styled-components";
import { Router } from "./Router";
import { BrowserRouter } from "react-router-dom";
import { defaultTheme } from "./styles/theme/default";
import { GlobalStyle } from "./styles/global";
import { CoffeeContextProvider } from "./contexts/CoffeeContext";
import { OrderContextProvider } from "./contexts/OrderContext";

export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>

        <CoffeeContextProvider>
          <OrderContextProvider>
            <Router />
          </OrderContextProvider>
        </CoffeeContextProvider>

      </BrowserRouter >
      <GlobalStyle />
    </ThemeProvider>

    
  )
}


