import { Favorite } from './favorite.model';
import { createReducer, on } from '@ngrx/store';
import { get, add } from './favorite.actions';
import LocalStorage from '../LocalStorage';

export const initialState: Favorite = {
  comics: [],
  characters: [],
  counter: 0,
  series: [],
};

const _favoriteReducer = createReducer(
  initialState,
  on(get, (state) => {
    const comics = Object.values(JSON.parse(LocalStorage.get('comics')));
    const characters = Object.values(
      JSON.parse(LocalStorage.get('characters'))
    );

    return {
      ...state,
      comics,
      characters,
      counter: comics.length + characters.length,
    };
  }),
  on(add, (state, action) => {
    const list = LocalStorage.favoriteAdd(action.key, action.item);
    return { ...state, [action.key]: Object.values(list) };
  })
);

export function favoriteReducer(state, action) {
  return _favoriteReducer(state, action);
}
