import { configureStore } from '@reduxjs/toolkit'
import { pokemonApi } from './api/pokemonApi'
import { myPokemonApi } from './api/myPokemonApi'

export const store = configureStore({
  reducer: {
    [pokemonApi.reducerPath]: pokemonApi.reducer,
    [myPokemonApi.reducerPath]: myPokemonApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
    .concat([pokemonApi.middleware, myPokemonApi.middleware]),
})
