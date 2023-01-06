const convert = 1024
const precioRam = 0.05
const precioDisk = 0.01
const precioCPU = 0.04

const formatMoney = (valor) => {
    const formatter = new Intl.NumberFormat('en-US',{
        style:'currency',
        currency: 'CUP'
    })
    return formatter.format(valor)
}

const calculateTotal = (ram,cpu,disk , time) => {
    let totalRam = 512
    let totalCPU = 1
    let totalDisk = 20

    if(time === 1){
        totalRam = ram  * precioRam / convert
        totalCPU = cpu * precioCPU / convert
        totalDisk = disk * precioDisk / convert
    }
    return [totalRam,totalCPU,totalDisk]
}

export {
    formatMoney,
    calculateTotal

}