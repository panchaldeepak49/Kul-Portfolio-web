import React,{ useState,useEffect } from 'react'
import logoImg from '/Images/bonsai.svg'
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    
    const navigate = useNavigate();
    const [isMainMenuOpen, setIsMainMenuOpen] = useState(false);

  return (
    <>
    <div className=' w-full h-20 bg-[#002B46] flex justify-between items-center'>
        <img src={logoImg} className='md:h-19 sm:h-16 h-12 sm:ml-20 ml-5 cursor-pointer' 
        onClick={()=>navigate('/')}></img>

     <nav>
     <ul className={` md:flex md:items-center md:justify-between relative  md:mr-0  z-50  md:static md:mt-0 bg-[#002B46] sm:mt-96  md:h-20 h-auto md:w-auto 
                    left-0 md:py-0 py-4 md:pl-0 sm:opacity-100 ${isMainMenuOpen ? 'opacity-100' : 'opacity-0'}  transition-all ease-in duration-500`}>

        <li className='flex items-center md:mx-2 md:py-8 py-2 px-2 font-Syne text-white cursor-pointer sm:text-base text-xs hover:text-orange-500'>
            <a href='/about'>About</a> 
        </li>
        <li className='flex items-center md:mx-2 md:py-8 py-2 px-2 font-Syne text-white sm:text-base text-xs hover:text-orange-500'>
            <a href='#' >Services</a> 
        </li>
        <li className='flex items-center md:mx-2 md:py-8 py-2 px-2 font-Syne text-white sm:text-base text-xs hover:text-orange-500'>
            <a href='#' >Blog</a> 
        </li>
        <li className='flex items-center md:mx-2 md:py-8 py-2 px-2 font-Syne text-white sm:text-base text-xs hover:text-orange-500'>
            <a href='#' >Contact</a> 
        </li>

        </ul>
     </nav>

    </div>
    </>
  )
}

export default Navbar