import { Favorite } from './store/favorite.model';
export interface AppState {
  readonly favorite: Favorite;
}
