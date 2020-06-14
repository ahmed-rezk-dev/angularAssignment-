import { Favorite } from './../store/favorite.model';
import { AppState } from './../app.state';
import { Component, OnInit } from '@angular/core';
import LocalStorage from '../LocalStorage';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import * as FavoriteActions from '../store/favorite.actions';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss'],
})
export class FavoriteComponent implements OnInit {
  characters: Observable<Object>;
  favorite: Observable<Favorite>;
  comics: Observable<Object>;
  series: Array<Object>;
  count$: Observable<number>;
  constructor(private store: Store<AppState>) {
    this.favorite = this.store.select((state) => state.favorite);
    this.comics = this.store.select((state) => state.favorite.comics);
    this.characters = this.store.select((state) => state.favorite.characters);
  }

  ngOnInit(): void {
    this.store.dispatch(FavoriteActions.get());
  }

  addToFav(key: string, item: Object) {
    this.store.dispatch(FavoriteActions.add({ key, item }));
  }
}
