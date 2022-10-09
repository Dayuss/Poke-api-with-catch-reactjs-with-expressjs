import React, {useState} from 'react'
import {
  useParams
} from "react-router-dom";
import {Side} from './src/side'
import {Content} from './src/content'
import { NavLink } from "react-router-dom";
import { useGetDetailQuery } from '../../redux/api/pokemonApi';

export const DetailPage = () => {
  let { id } = useParams();
  const { data, error, isLoading } = useGetDetailQuery(id)

  return (
    <div className="px-4 md:px-[17em] pt-5">
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
            <NavLink to='/' className='mt-10 pl-4 text-[2em]'>{"< Back to List"}</NavLink>
            <div className='md:flex mt-5'>
              <div className="w-full md:w-[26%]">
                <Side
                  height={data.data.height}
                  weight={data.data.weight}
                  types={data.data.types}
                  name={data.data.name}
                  image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
                  id={id}
                />
              </div>
              <div className="w-full md:w-[74%]">
                <Content
                  abilities={data.data.abilities}
                  moves={data.data.moves}
                  stats={data.data.stats}
                />
              </div>
            </div>
          </>
        ): null
      }
    </div>
  )
}