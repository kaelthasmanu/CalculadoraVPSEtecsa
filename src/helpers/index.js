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
    let totalRam = 0.05
    let totalCPU = 0.04
    let totalDisk = 0.01

    if(time === 1){
        totalRam = ram  * precioRam / convert
        totalCPU = cpu * precioCPU / convert
        totalDisk = disk * precioDisk / convert
    }else if (time === 7){
        totalRam = (ram  * precioRam / convert) * 7
        totalCPU = (cpu * precioCPU / convert) * 7
        totalDisk = (disk * precioDisk / convert) * 7
    }else if(time === 31){
        totalRam = (ram  * precioRam / convert) * 31
        totalCPU = (cpu * precioCPU / convert) * 31
        totalDisk = (disk * precioDisk / convert) * 31
    }

    return [totalRam,totalCPU,totalDisk]
}

export {
    formatMoney,
    calculateTotal

}