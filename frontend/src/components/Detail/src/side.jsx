import React, {useEffect} from 'react'
import Logo from '../../../logo.svg';
import { useCheckCaughtMutation } from '../../../redux/api/pokemonApi';
import { useNavigate } from 'react-router-dom'


export const Side = ({height,weight,types,name,image, id}) => {
  const navigate = useNavigate();
  const [checkCaught, response] = useCheckCaughtMutation()

  useEffect(()=>{
    if(response.isError) navigate('/broke')
    else if(response.data) navigate('/caught/'+id)
  },[response])


  return (
    <div className="px-4">
      <div className="border-8 border-[#333333] text-center shadow-2xl bg-white">
        <h1 className="text-[3em]">{name}</h1>
      </div>
      <div className="w-full h-auto bg-white mt-10 shadow-2xl pb-5 pt-5">
        <img className="rounded-full h-[200px] mx-auto shadow-xl border-4 border-[#333] " src={image} />
        <p className="mx-auto text-center text-[2.5em]">
          {
            types.map(i=>(
              <span class="text-xl inline-block py-2 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-light bg-[#eee] text-black rounded mx-1">{i.type.name}</span>
            ))
          }
        </p>
      </div>
      <div className='px-10 py-5 my-5 h-auto shadow-2xl border-4 border-[#333]'>
        <p className='text-3xl py-2'>Height : {height}dm</p>
        <hr className="border-b-4 border-[#333]"/>
        <p className='text-3xl py-2'>Weight : {weight}hg</p>
      </div>

      <button 
        onClick={(e)=>{
          e.preventDefault();
          checkCaught({
            pokeId: id,
            sessId: localStorage.getItem("sessId")
          })
          .unwrap()
          .then(() => {})
          .then((error) => {
            console.log(error)
          })
        }}
        className="w-full  bg-[#d32f2f] hover:bg-[#b71c1c] text-white mx-auto rounded text-[30px] border-8 border-[#333333] shadow-2xl flex justify-center py-2"
        >
          <img className="h-6 pt-1 mt-2 mr-3" src={Logo} alt="logo" />
          Catch This!!!
        </button>
    </div>
  )
}