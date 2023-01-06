function Buttons({operador , fn}){
    return(
        <button type='button'
                className="h-8 w-8 flex items-center justify-center font-bold
                text-white text-2xl bg-blue-700 rounded-full hover:outline-none
                hover:ring-2 hover:ring-offset-2 hover:ring-blue-700"
                onClick={fn}>
                {operador}
        </button>
    )
}

export default Buttons