import { ComicDetailsComponent } from './comic-details/comic-details.component';
import { CharacterDetailsComponent } from './character-details/character-details.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { SigninComponent } from './signin/signin.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'favorite', component: FavoriteComponent },
  { path: 'character/details', component: CharacterDetailsComponent },
  { path: 'comic/details', component: ComicDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
