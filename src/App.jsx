import { useState , useEffect } from 'react'
import Header from "./components/Header.jsx"
import Buttons from "./components/buttons.jsx";
import {formatMoney , calculateTotal } from "./helpers"

function App() {
    const [Ram, setRam] = useState(512)
    const [CPU, setCPU] = useState(1)
    const [Disk , setDisk] = useState(20)
    const [tiempo , setTiempo] = useState(1)
    const [pagoRam , setPagoRam] = useState(0.05)
    const [pagoCPU , setPagoCPU] = useState(0.04)
    const [pagoDisk , setPagoDisk] = useState(0.01)

    useEffect(() => {
        const totalpago = calculateTotal(Ram , CPU , Disk , tiempo)
        setPagoRam(totalpago[0])
    }, [Ram ,tiempo]);

    useEffect(() => {
        const totalpago = calculateTotal(Ram , CPU , Disk , tiempo)
        setPagoCPU(totalpago[1])
    }, [CPU , tiempo]);

    useEffect(() => {
        const totalpago = calculateTotal(Ram , CPU , Disk , tiempo)
        setPagoDisk(totalpago[2])
    }, [Disk , tiempo]);

    const minDisk = 20
    const maxDisk = 500
    const minRam = 512
    const maxRam = 16384
    const minCPU = 1
    const maxCPU = 8
    const STEP = 1

    function changeRam(e){
        setRam(+e.target.value)
    }
    function changeCPU(e){
        setCPU(+e.target.value)
    }
    function changeDisk(e){
        setDisk(+e.target.value)
    }

    function buttonIncrementRam(){
        const result = Ram + STEP
        if(result > maxRam){
            alert("Cantidad no valida")
            return
        }
        setRam(result)
    }
    function buttonDecrementRAM(){
        const result = Ram - STEP
        if(result < minRam){
            alert("Cantidad no valida")
            return
        }
        setRam(result)
    }
    function buttonIncrementDisk(){
        const result = Disk + STEP
        if(result > maxDisk){
            alert("Cantidad no valida")
            return
        }
        setDisk(result)
    }
    function buttonDecrementDisk(){
        const result = Disk - STEP
        if(result < minDisk){
            alert("Cantidad no valida")
            return
        }
        setDisk(result)
    }
    function buttonIncrementCPU(){
        const result = CPU + STEP
        if(result > maxCPU){
            alert("Cantidad no valida")
            return
        }
        setCPU(result)
    }
    function buttonDecrementCPU(){
        const result = CPU - STEP
        if(result < minCPU){
            alert("Cantidad no valida")
            return
        }
        setCPU(result)
    }
    return (
    <div className="flex justify-between my-5 flex-wrap">
        <div className="m-10 bg-white shadow p-5">
            <Header />
            <div className="flex justify-between my-6">
                <Buttons
                    operador= '-'
                    fn={buttonDecrementRAM}
                />
                <Buttons
                    operador= '+'
                    fn={buttonIncrementRam}
                />
            </div>
            <label htmlFor="Ram" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Ram</label>
            <input id="Ram"
                   type="range"
                   className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                   min={minRam}
                   max={maxRam}
                   value={Ram}
                   step="10"
                   onChange={changeRam}
            />
            <p className="mb-3 text-center">{Ram} MB</p>
            <div className="flex justify-between my-6">
                <Buttons
                    operador= '-'
                    fn={buttonDecrementCPU}
                />
                <Buttons
                    operador= '+'
                    fn={buttonIncrementCPU}
                />
            </div>
            <label htmlFor="CPU" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">CPU</label>
            <input id="CPU"
                   type="range"
                   className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                   min={minCPU}
                   max={maxCPU}
                   value={CPU}
                   onChange={changeCPU}
            />
            <p className="mb-3 text-center">{CPU} Cores(Nucleos)</p>
            <div className="flex justify-between my-6">
                <Buttons
                    operador= '-'
                    fn={buttonDecrementDisk}
                />
                <Buttons
                    operador= '+'
                    fn={buttonIncrementDisk}
                />
            </div>
            <label htmlFor="Disk" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Disk</label>
            <input id="Disk"
                   type="range"
                   className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                   min={minDisk}
                   max={maxDisk}
                   value={Disk}
                   step="20"
                   onChange={changeDisk}
            />
            <p className="mb-3 text-center">{Disk} GB</p>
            <h2 className="text-2xl text-gray-500 text-center">
                Elige el tiempo a calcular
            </h2>
            <select className="mt-5 w-full p-2 bg-white border border-gray-300 rounder-lg text-center text-xl font-bold"
            value={tiempo}
            onChange={e => {
                setTiempo(e.target.value)
            }}
            >
                <option value="24">1 Dia</option>
                <option value="7">1 Semana</option>
                <option value="31">1 Mes</option>
            </select>
        </div>
        <div className="m-10 bg-white shadow p-5">
            <h1 className="text-4xl font-extrabold text-gray-500 text-center">Resumen de pago:</h1>
            <p className="text-xl text-gray-500 text-center font-bold">Total en RAM</p>
            <p className="text-xl text-black text-center font-bold">{pagoRam}</p>
            <p className="text-xl text-gray-500 text-center font-bold">Total a CPU</p>
            <p className="text-xl text-black text-center font-bold">{pagoCPU}</p>
            <p className="text-xl text-gray-500 text-center font-bold">Total a Disk</p>
            <p className="text-xl text-black text-center font-bold">{pagoDisk}</p>
        </div>
    </div>

  )
}

export default App
