import { createContext, ReactNode, useState } from "react"

interface OrderContextProvider {
    children: ReactNode
}

export interface Order {
    zipcode: string
    street: string
    number: string
    complement?: string
    neighborhood: string
    city: string
    uf: string
    paymentType: "Cartão de débito" | "Cartão de crédito" | "Dinheiro" | undefined
}

export const OrderContext = createContext({} as OrderContextType)

interface OrderContextType {
    order: Order
    addOrder: (address: Order) => void
}

export function OrderContextProvider({ children }: Readonly<OrderContextProvider>) {

    const [order, setOrder] = useState<Order>({
        city: '',
        neighborhood: '',
        number: '',
        street: '',
        uf: '',
        zipcode: '',
        paymentType: undefined
    })

    function addOrder(order: Order) {
        setOrder(order)
    }

    return(
        <OrderContext.Provider
        value={{
            order,
            addOrder
        }}
        >
            {children}
        </OrderContext.Provider>
    )
}