import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
const sessId=localStorage.getItem("sessId")
export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:9979/api/',
  }),
  tagTypes: ['Pokemon'],
  endpoints: (builder) => ({
    getPokemon: builder.query({
      query: (limit) => `poke?limit=${limit}&sessId=${sessId}`,
      providesTags: ['Pokemon'],

    }),
    getDetail: builder.query({
        query: (id) => `poke/${id}`,
    }),
    checkCaught: builder.mutation({
      query: (payload) => ({
        url: 'poke',
        method: 'POST',
        body: payload,
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }),
    }),

  }),
})

export const { 
  useGetPokemonQuery,
  useGetDetailQuery,
  useCheckCaughtMutation
 } = pokemonApi
