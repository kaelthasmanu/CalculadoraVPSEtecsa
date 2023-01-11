const convert = 1024
const precioRam = 0.05
const precioDisk = 0.01
const precioCPU = 0.04

const formatMoney = (valor) => {
    const formatter = new Intl.NumberFormat('en-US',{
        style:'currency',
        currency: 'CUP'
    })
    return `${formatter.format(valor)} $`
}

const calculateTotal = (ram,cpu,disk , time) => {
    let totalRam = 0.05
    let totalCPU = 0.04
    let totalDisk = 0.01

    if(time === 1){
        totalRam = (ram  * precioRam / convert) * 24
        totalCPU = (cpu * precioCPU) * 24
        totalDisk = (disk * precioDisk) * 24
    }else if (time === 7){
        totalRam = (ram  * precioRam / convert) * 168
        totalCPU = (cpu * precioCPU) * 168
        totalDisk = (disk * precioDisk) * 168
    }else if(time === 31){
        totalRam = (ram  * precioRam / convert) * 720
        totalCPU = (cpu * precioCPU) * 720
        totalDisk = (disk * precioDisk) * 720
    }

    return [totalRam,totalCPU,totalDisk]
}

function calcIfTransfermovil(ram , cpu , disk ,time ){
    let totalRam = 0.05
    let totalCPU = 0.04
    let totalDisk = 0.01

    if(time === 1){
        totalRam = (ram  * precioRam / convert) * 24
        totalCPU = (cpu * precioCPU) * 24
        totalDisk = (disk * precioDisk) * 24
    }else if (time === 7){
        totalRam = (ram  * precioRam / convert) * 168
        totalCPU = (cpu * precioCPU) * 168
        totalDisk = (disk * precioDisk) * 168
    }else if(time === 31){
        totalRam = (ram  * precioRam / convert) * 720
        totalCPU = (cpu * precioCPU) * 720
        totalDisk = (disk * precioDisk) * 720
    }

    return [totalRam,totalCPU,totalDisk]
}

export {
    formatMoney,
    calculateTotal

}