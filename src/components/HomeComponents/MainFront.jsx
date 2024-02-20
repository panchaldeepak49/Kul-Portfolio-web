import React from 'react'
import mainImg from '/Images/w-laptop.png'
import { useNavigate } from 'react-router-dom'
import arrowImg from '/Images/arrow.png'

const MainFront = () => {
    const navigate = useNavigate();

  return (
    <>
    <div className='flex w-full '>
        <div className='w-[60%] flex justify-center mt-36'>
            <div>
            <p className='text-xl font-semibold italic'>Hello</p>
            <p className='text-5xl font-bold mt-2'>I'm  <span className='text-green-600'>Kulvendra</span></p>
            <p className='text-5xl text-green-600 font-bold'>Singh</p>
            <p className='text-2xl font-semibold mt-4'>Sr. Embedded Engineer</p>
            <div className='flex gap-5 mt-4'>
            <p className='px-4 py-2 rounded-2xl font- bg-red-400 cursor-pointer' onClick={()=>navigate('/about')}>About me</p>
            <p className='px-4 py-2 rounded-2xl bg-green-600 cursor-pointer' onClick={()=>navigate('/work')}>My Works</p>
            </div>
            
            </div>
            
        </div>
        
        <div className='w-[40%] '>
            <img src={mainImg} ></img>
        </div>
    </div>

    <img src={arrowImg} className='absolute top-[55%] left-[35%] z-0 xl:w-[27%]' ></img>
    </>
  )
}

export default MainFront