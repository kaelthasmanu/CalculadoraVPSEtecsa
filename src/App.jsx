import { useState , useEffect } from 'react'
import Header from "./components/Header.jsx"
import Buttons from "./components/buttons.jsx";
import {formatMoney , calculateTotal} from "./helpers"
import Footer from "./components/footer.jsx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function App() {
    const [Ram, setRam] = useState(512)
    const [CPU, setCPU] = useState(1)
    const [Disk , setDisk] = useState(20)
    const [tiempo , setTiempo] = useState(31)
    const [pagoRam , setPagoRam] = useState(0.05)
    const [pagoCPU , setPagoCPU] = useState(0.04)
    const [pagoDisk , setPagoDisk] = useState(0.01)
    const [tecno , setTecno] = useState(0)
    const [checked, setChecked] = useState(false);


    useEffect(() => {
        const totalpago = calculateTotal(Ram , CPU , Disk , tiempo)
        console.log(tiempo)
        setPagoRam(totalpago[0])
        setPagoCPU(totalpago[1])
        setPagoDisk(totalpago[2])
    }, [Ram ,CPU, Disk, tiempo]);

    useEffect(() => {

    })

    useEffect(() => {
        if(tecno == 1){
            setCPU(1)
            setDisk(20)
            setRam(512)
        }
        else if(tecno == 2){
            setCPU(1)
            setDisk(20)
            setRam(512)
        }
        else if(tecno == 3){
            setCPU(1)
            setDisk(20)
            setRam(1024)
        }
        else if(tecno == 4){
            setCPU(1)
            setDisk(20)
            setRam(512)
        }
        else if(tecno == 5){
            setCPU(1)
            setDisk(20)
            setRam(512)
        }
        else if(tecno == 6){
            setCPU(4)
            setDisk(50)
            setRam(2048)
        }
        else if(tecno == 7){
            setCPU(4)
            setDisk(50)
            setRam(2048)
        }
        else if(tecno == 8){
            setCPU(4)
            setDisk(50)
            setRam(4096)
        }
        else if(tecno == 9){
            setCPU(4)
            setDisk(50)
            setRam(4096)
        }
        else if(tecno == 10){
            setCPU(1)
            setDisk(20)
            setRam(512)
        }
    },[tecno])

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
        <div>
            <h1 className=" italic font-sans text-center bg-gray-700 text-white p-4">Calculadora de factura de arrendamiento VPS(Etecsa)</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center">
                <div className="m-10 bg-white p-2 max-w-sm rounded-3xl overflow-hidden shadow-2xl">
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
                    <select className="mt-5 w-full p-2 bg-white border border-gray-300 rounder-lg rounded-2xl text-center text-xl font-bold"
                            value={tiempo}
                            onChange={e => {
                                setTiempo(Number(e.target.value))
                            }}
                    >
                        <option value="31">1 Mes</option>
                        <option value="7">1 Semana</option>
                        <option value="1">1 Dia</option>
                    </select>
                </div>
                <div>
                    <div className="m-10 bg-white p-2 max-w-sm rounded-3xl overflow-hidden shadow-2xl">
                        <h1 className="text-4xl font-extrabold text-gray-500 text-center">Tecnologias especificas a instalar:</h1>
                        <select className="mt-5 w-full p-2 bg-white border border-gray-300 rounder-lg rounded-2xl text-center text-xl font-bold"
                                value={tecno}
                                onChange={e => {
                                    setTecno(Number(e.target.value))
                                }}  >
                            <option value="0">None</option>
                            <option value="1">VPN(Wireguard)</option>
                            <option value="2">VPN(OpenVPN)</option>
                            <option value="3">VPN(Outline)</option>
                            <option value="4">RouterOS(Mikrotik)</option>
                            <option value="5">Minecraft</option>
                            <option value="6">World of Warcraft(3.3.5a)</option>
                            <option value="7">World of Warcraft(4.3.4)</option>
                            <option value="8">World of Warcraft(5.4.8)</option>
                            <option value="9">Openfire(Chat)</option>
                            <option value="10">Nginx(Web/Proxy inverso)</option>
                        </select>
                        <p className='p-1'>Aqui puede selecionar una tecnologia especifica ejemplo una VPN,Web,Juego y el resultado va hacer las especificaciones minimas para su uso</p>
                    </div>
                    <div className="m-10 bg-white p-2 max-w-sm rounded-3xl overflow-hidden shadow-2xl">
                        <h1 className="text-4xl font-extrabold text-gray-500 text-center">Resumen de pago:</h1>
                        <p className="text-xl text-gray-500 text-center font-bold">Total en RAM:</p>
                        <p className="text-xl text-black text-center font-bold">{checked == true ? formatMoney(Math.round(pagoRam - pagoRam*10/100)) : formatMoney(Math.round(pagoRam ))}</p>
                        <p className="text-xl text-gray-500 text-center font-bold">Total a CPU:</p>
                        <p className="text-xl text-black text-center font-bold">{checked == true ? formatMoney(Math.round(pagoCPU - pagoCPU*10/100)) : formatMoney(Math.round(pagoCPU))}</p>
                        <p className="text-xl text-gray-500 text-center font-bold">Total a Disk:</p>
                        <p className="text-xl text-black text-center font-bold">{checked == true ? formatMoney(Math.round(pagoDisk - pagoDisk*10/100)) : formatMoney(Math.round(pagoDisk))}</p>
                        <p className="text-xl text-gray-500 text-center font-bold">Total:</p>
                        <p className="text-xl text-black text-center font-bold">{checked == true ? formatMoney(Math.round((pagoDisk + pagoRam + pagoCPU)-(pagoDisk + pagoRam + pagoCPU) *10 /100)) : formatMoney(Math.round(pagoDisk + pagoRam + pagoCPU))}</p>
                        <div className="flex items-center mb-4">
                        <input
                            id="default-checkbox"
                            type="checkbox"
                            checked={checked}
                            onChange={() => {
                                console.log(checked)
                                setChecked(!checked);
                                }}
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label
                            htmlFor="default-checkbox"
                            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                            Pago por transfermovil con descuento de 10%
                        </label>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
  )
}

export default App
