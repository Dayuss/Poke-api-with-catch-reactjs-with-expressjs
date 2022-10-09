import React from 'react'
import { useNavigate } from 'react-router-dom'


export const BrokePage = () => {
  const navigate = useNavigate();

  return (
    <div className="px-4 md:px-[17em] pt-20">
        <p className='text-center text-[3.5em]'>
            Oopps! The poke ball is broke.
        </p>
        <p className='text-center text-[2em]'>
            The pokemon got away. Better luck next time.
        </p>
        <div className='flex justify-center'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-[15em] h-[15em]">
            <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
            </svg>

        </div>
        <div className='flex justify-center'>
            <button 
                onClick={()=>{
                    navigate('/')
                }}
                className="bg-[#d32f2f] hover:bg-[#b71c1c] text-white py-1 px-20 rounded text-[50px] border-8 border-[#333333] shadow-2xl flex"
            >
            Try another one
            </button>
        </div>


    </div>
  )
}