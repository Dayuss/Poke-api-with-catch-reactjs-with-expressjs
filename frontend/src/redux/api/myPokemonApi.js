import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
const sessId=localStorage.getItem("sessId")

function providesList(resultsWithIds, tagType) {
  console.log(resultsWithIds, '<<<<<<<<<<<<<<<')
  return resultsWithIds
    ? [
      ...resultsWithIds.map(({ myPokeId }) => ({ type: tagType, id:myPokeId })),
        { type: tagType, id: 'LIST' },
      ]
    : [{ type: tagType, id: 'LIST' }]
}


export const myPokemonApi = createApi({
  reducerPath: 'myPokemonApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:9979/api/',
  }),
  tagTypes: ['MyPokemon'],
  endpoints: (builder) => ({
    getMyPokemon: builder.query({
      query: () => `mine?sessId=${sessId}`,
      providesTags: (result) => providesList(result.data, 'MyPokemon'),
    }),
    insertCaughtPokemon: builder.mutation({
      query: (payload) => ({
        url: 'mine',
        method: 'POST',
        body: payload,
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
        invalidatesTags: ['MyPokemon']
      }),
    }),
    releasePokemon: builder.mutation({
      query: (payload) => ({
        url: `mine/release/${payload}`,
        method: 'DELETE',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
        invalidatesTags: [{ type: 'Post', id: 'LIST' }],
      }),
    }),
  })
})

export const { 
  useGetMyPokemonQuery,
  useInsertCaughtPokemonMutation,
  useReleasePokemonMutation
 } = myPokemonApi
