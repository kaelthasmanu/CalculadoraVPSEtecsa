import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Footer(){
    return(

        <footer
            className="relative bottom-0 left-0 z-20 w-full p-2 bg-gray-700 md:flex md:items-center md:justify-between md:p-3">
    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/"
                                                                                        className="hover:underline">Manuel™</a>. All Rights Reserved.
    </span>
            <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
                <li>
                    <p>Desarrollado por: </p>
                </li>
                <li>
                    <a href="https://t.me/king_0f_deathhh" className="p-1 font-sans hover:font-serif ">Manuel</a>
                </li>
            </ul>
        </footer>
    )
}

export default Footer