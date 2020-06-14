import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { AppState } from './../app.state';
import * as FavoriteActions from '../store/favorite.actions';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  isNavbarCollapsed = true;
  counter: Observable<number>;
  constructor(private store: Store<AppState>) {
    this.counter = this.store.select((state) => state.favorite.counter);
  }
  ngOnInit(): void {
    this.store.dispatch(FavoriteActions.get());
  }
}
