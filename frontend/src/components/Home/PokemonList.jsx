import React, {useState} from 'react'
import { useGetPokemonQuery } from '../../redux/api/pokemonApi'
import PokemonItem from './PokemonItem'

export const PokemonList = () => {
  const everyLimit = 9;
  const [limit, setLimit] = useState(9);
  const { data, error, isLoading } = useGetPokemonQuery(limit)
  
  return (
    <div className="p-4">
      <div className="flex justify-center flex-wrap">
        {error ? (
          <div className="flex flex-col items-center px-40">
            <h1 className="text-[50px] text-[#E59443] align-center">
              {error.data}
            </h1>
          </div>
        ) : isLoading ? (
          <>Loading...</>
        ) : data ? (
          data.data.map((item) => (
              <PokemonItem
                key={item.id}
                id={item.id}
                captured={item.captured}
                name={item.name}
                image={item.image}
              />
          ))
          ) : null}
      </div>
      {
        data ?(
          <div className="flex flex-col items-center px-40 py-14">
            {
              data.data.length===limit?(
                <button 
                  onClick={()=>{
                    setLimit(limit+everyLimit);
                  }}
                  className="bg-[#d32f2f] hover:bg-[#b71c1c] text-white py-1 px-20 rounded text-[50px] border-8 border-[#333333] shadow-2xl flex"
                  >
                    Load More
                  </button>
              ):(
                <button type="button"
                    class="inline-flex items-center bg-[#d32f2f] hover:bg-[#b71c1c] text-white py-1 px-20 rounded text-[43px] border-8 border-[#333333] shadow-2x transition duration-150 ease-in-out  shadow cursor-not-allowed"
                    disabled="">
                    <svg class="w-5 h-5 mr-3 -ml-1 text-white animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 24 24">
                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                        <path class="opacity-75" fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                        </path>
                    </svg>
                    Loading...
                </button>
              )
            }

          </div>
        ): null
      }
    </div>
  )
}