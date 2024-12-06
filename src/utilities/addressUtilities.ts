export async function findAddressByZipCode(userZipCode: string){
    const filteredZipCode = userZipCode.replace("-", "")
    const response = (await fetch(`https://viacep.com.br/ws/${filteredZipCode}/json/`)).json()
    const addressByZipCode = await response

    return addressByZipCode
}