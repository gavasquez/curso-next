import { Action, Dispatch, Middleware, MiddlewareAPI } from '@reduxjs/toolkit';
import { RootState } from '..';

export const localStorageMiddelware: Middleware = (state) => {

  return (next) => (action: any) => {
    next(action);
    //console.log({state: state.getState()});
    if(action.type === 'pokemons/toggleFavorite'){
      const { pokemons } = state.getState() as RootState;
      localStorage.setItem('favorite-pokemons', JSON.stringify(pokemons));
      return;
    }
  };
}