import React from 'react'
import Logo from '../../../logo.svg';
import ProgressBar from './progressBar'

export const Content = ({abilities, moves, stats}) => {
  
  return (
    <div className="px-4">
      <div className="border-b-4 border-[#333333] text-left shadow-2x">
        <h1 className="text-[3em]">Abilities</h1>
      </div>
      <ul className='mt-3'>
        {
          abilities.map(i=>(
            <li className="flex text-[1.5em]"><img className="h-8 pt-1 mr-1" src={Logo} alt="logo" /> {i.ability.name}</li>
          ))
        }
      </ul>
      <div className="border-b-4 border-[#333333] text-left shadow-2x">
        <h1 className="text-[3em]">Stats</h1>
      </div>
      <div className="w-full h-auto mt-2 pt-5 pb-10 px-5 border-4 border-[#333333] ">
        {
          stats.map(i=>(
            <ProgressBar
              progress={`${i.base_stat>100?100: i.base_stat}%`}
              title={i.stat.name}
            />

          ))
        }
      </div>
      <div className="mt-10 text-left shadow-2x">
        <h1 className="text-[3em]">Moves</h1>
      </div>
      <div className="w-full h-auto mt-2 shadow-2xl p-10 border-4 border-[#333333] ">
        {
          moves.map(i=>(
            <span class="bg-white text-gray-800 text-xs font-medium inline-flex items-center px-3 py-2 rounded mr-2 dark:bg-gray-700 dark:text-gray-300  text-[1.5em] mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5l-3.9 19.5m-2.1-19.5l-3.9 19.5" />
              </svg>

              {i.move.name}
            </span>
          ))
        }
      </div>
    </div>
  )
}