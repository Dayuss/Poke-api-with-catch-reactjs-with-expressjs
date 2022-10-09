import React, {useState} from 'react'
import { useEffect } from 'react';
import { useGetMyPokemonQuery } from '../../redux/api/myPokemonApi';
import Item from './item'
export const MyPokemon = () => {
    const { data, error, isLoading } = useGetMyPokemonQuery()
    const [mylist, setMylist] = useState([]);

    useEffect(()=>{
        if(data)
            setMylist(data.data)
    }, [data])
    
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
            mylist.map((item) => (
                <Item 
                    name={item.nickname}
                    image={item.picture}
                    id={item.myPokeId}
                />
            ))
            ) : null}
        </div>
        </div>
    )
}