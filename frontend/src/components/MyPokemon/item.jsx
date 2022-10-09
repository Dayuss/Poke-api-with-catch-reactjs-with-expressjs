import React, { useEffect } from 'react'
import { toast } from 'react-toastify'
import { isPrime } from '../../helper/chackPrime'
import { useReleasePokemonMutation } from '../../redux/api/myPokemonApi'

const Item = ({id, name, image }) => {

  const [releasePokemon, response] = useReleasePokemonMutation()

  useEffect(()=>{
    if(response.isSuccess){
        toast(`Success to release the pokemon!`)
        setTimeout(()=>{window.location.reload();},1500);
    }
  },[response])
  const handleRelease = ()=>{
    const check = isPrime(Math.floor((Math.random() * 100) + 1))
    if(check) releasePokemon(id)
    else toast("Failed to release, not a prime num!")
  }
  return (
      <div
          className="bg-white rounded-lg shadow hover:shadow-2xl w-full md:w-5/6 mb-2 md:mx-3 md:mb-4 py-3 md:flex md:flex-col md:justify-center md:px-4 lg:w-1/3 xl:w-1/4"
      >
        <div className="mx-auto w-full text-center md:mx-4">
            <img src={image} alt={name} className="rounded-full block mx-auto" />
        </div>
        <div className="my-6 mx-auto w-full text-center">
            <p className="text-[3em] text-purple-500 tracking-wide leading-2 md:leading-6">{name}</p>
        </div>
        <button 
        onClick={handleRelease}
        className="bg-[#d32f2f] hover:bg-[#b71c1c] text-white py-1 px-3 rounded text-[50px] border-4 border-[#333333] shadow-2xl w-full"
        >
          Release
        </button>
      </div>
  )
}

export default Item
