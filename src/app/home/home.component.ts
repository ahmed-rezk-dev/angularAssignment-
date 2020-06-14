import { ApiService } from '../api.service';
import { Component, OnInit } from '@angular/core';
import LocalStorage from '../LocalStorage';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  limit: number = 9;
  offest: number = 0;
  characters: Array<Object>;
  creators: Object;
  loading: boolean = true;
  btnLoading: boolean = false;
  constructor(private ApiService: ApiService) {}

  ngOnInit(): void {
    // Fetch characters
    this.ApiService.getCharacters(this.limit, this.offest).subscribe(
      ({ data }: any) => {
        this.characters = data.results;
        this.loading = false;
      }
    );
  }

  // Fetch more characters
  loadingMoreHandler() {
    this.btnLoading = true;
    let offest: number = this.limit + 3;
    this.ApiService.getCharacters(3, offest).subscribe(({ data }: any) => {
      let margeCharacters = [...this.characters, ...data.results];
      this.characters = margeCharacters;
      this.limit = offest;
      this.btnLoading = false;
    });
  }

  addToFav(key: string, item: Object) {
    LocalStorage.favoriteAdd(key, item);
  }
}
