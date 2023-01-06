const convert = 1024
const precioRam = 0.05
const formatMoney = (valor) => {
    const formatter = new Intl.NumberFormat('en-US',{
        style:'currency',
        currency: 'CUP'
    })
    return formatter.format(valor)
}

const calculateTotal = (cant, plazo) => {
    let total

    if(plazo === 24){
        total = cant  * precioRam / convert
        console.log(total)
    }
    return total
}

export {
    formatMoney
}