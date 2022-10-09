import React, {useState,useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useInsertCaughtPokemonMutation } from '../../redux/api/myPokemonApi';
import { useGetDetailQuery } from '../../redux/api/pokemonApi';
import { toast } from 'react-toastify';
const empty = [null, 'null', '', '-', undefined]

export const CaughtPage = () => {
  const navigate = useNavigate();
  const [nickname, setNickname] = useState('');

  let { id } = useParams();
  const { data, error, isLoading } = useGetDetailQuery(id)

  const [inserCaught, response] = useInsertCaughtPokemonMutation();

useEffect(()=>{
    if(response.isError) toast(response.error.message)
    else if(response.isSuccess){
        toast(`${response.data.message}`)
        setTimeout(()=>{navigate('/');},500);
    }
  },[response])

  const handleKeep = ()=>{
    if(!empty.includes(nickname)){
        inserCaught({
            pokeId: id,
            sessId: localStorage.getItem("sessId"),
            nickname
        })
        .unwrap()
        .then(() => {})
        .then((error) => {
            console.log(error)
        })
    }else toast("Please give nickname before keep it!")
  }

  return (
    <div className="px-4 md:px-[17em] pt-20">
         {
            error ? (
            <div className="flex flex-col items-center px-40">
                <h1 className="text-[50px] text-[#E59443] align-center">
                {error.data}
                </h1>
            </div>
            ) : isLoading ? (
            <>Loading...</>
            ) : data ? (
                <>
                    <p className='text-center text-[3.5em] flex justify-center'>
                        Congratulation! you got {data.data.name} <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-10 h-10">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                    </svg>

                    </p>
                    <p className='text-center text-[2em]'>
                        Do you want to keep it? Just give the nickname and you got it at your pokemon list! <br />If not you can release and go back to the list!
                    </p>
                    <div className='flex justify-center'>
                        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`} alt="pokemon" />
                    </div>
                    <div className='flex justify-center mb-14 px-80'>
                        <input 
                            type="text" 
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-center text-[3em]" 
                            placeholder="Give a nice nickname!" 
                            onChange={(e)=>setNickname(e.target.value)}
                        />

                    </div>
                    <div className='flex justify-center'>
                        <button 
                            onClick={()=>{
                                navigate('/')
                            }}
                            className="bg-white hover:bg-[#eeeeee] text-[#d32f2f] py-1 px-20 rounded text-[50px] border-8 border-[#333333] shadow-2xl flex mr-10"
                        >
                        Don't keep it!
                        </button>
                        <button 
                            onClick={()=>{
                                handleKeep();
                            }}
                            className="bg-[#d32f2f] hover:bg-[#b71c1c] text-white py-1 px-20 rounded text-[50px] border-8 border-[#333333] shadow-2xl flex"
                        >
                        Keep it.
                        </button>
                    </div>
                </>
            ):null
        }
    </div>
  )
}