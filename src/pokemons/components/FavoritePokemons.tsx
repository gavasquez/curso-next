'use client'
import { useAppSelector } from '@/store';
import { PokemonGrid } from './PokemonGrid';
import { useState, useEffect } from 'react';
import { IoHeartOutline } from 'react-icons/io5';

export const FavoritePokemons = () => {

  const favoritesPokemons = useAppSelector(state => Object.values(state.pokemons.favorites));

  /* const [pokemons, setPokemons] = useState(favoritesPokemons); */

  /* useEffect(() => {
    setPokemons(favoritesPokemons);
  }, [favoritesPokemons]); */
  

  return (
    <>
      {/* <PokemonGrid pokemons={ favoritesPokemons } /> */}
      {
        favoritesPokemons.length > 0
        ? (<PokemonGrid pokemons={ favoritesPokemons } />)
        : (<NoFavorites />)
      }
    </>
  )
}

export const NoFavorites = () => {
  return (
    <div className="flex flex-col h-[50vh] items-center justify-center">
      <IoHeartOutline size={100} className="text-red-500"/>
      <span>No hay favoritos</span>
    </div>
  )
}

