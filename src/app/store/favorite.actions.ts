import { createAction, props } from '@ngrx/store';

export const get = createAction('[Favorite Component] Get');
export const add = createAction(
  '[Favorite Component] Add',
  props<{ key: string; item: any }>()
);
export const remove = createAction('[Favorite Component] Remove');
