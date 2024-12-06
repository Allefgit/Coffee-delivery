import * as zod from 'zod'

export const newOrderValidationSchema = zod.object({
    zipcode: zod.string().regex(/^\d{5}-\d{3}$/, "Cep Inválido").min(1, 'Informe o CEP'),
    city: zod.string().min(1, 'Informe a Cidade'),
    neighborhood: zod.string().min(1, 'Informe o Bairro'),
    number: zod.string().min(1, 'Informe o Número'),
    paymentType: zod.enum(["Cartão de crédito", "Cartão de débito", "Dinheiro"], {
        message: "Selecione um tipo de pagamento"
    }), //to Do: Fazer um Enum para pagamento
    street: zod.string().min(1, 'Informe a Rua'),
    uf: zod.string().min(1, 'Informe a UF').max(2).toUpperCase(),
    complement: zod.string().optional(),
})

export type newOrderFormData = zod.infer<typeof newOrderValidationSchema>
