import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import LocalStorage from '../LocalStorage';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.scss'],
})
export class CharacterDetailsComponent implements OnInit {
  id: number;
  character: Object;
  comics: Array<Object>;
  series: Array<Object>;
  stories: Array<Object>;
  loading: boolean = true;
  constructor(private route: ActivatedRoute, private ApiService: ApiService) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.ApiService.getCharacterDetials(params.id).subscribe(
        ({ data }: any) => {
          this.character = data.results[0];
          this.loading = false;
        }
      );

      this.ApiService.getCharacterComics(params.id).subscribe(
        ({ data }: any) => {
          this.comics = data.results;
        }
      );

      this.ApiService.getCharacterSeries(params.id).subscribe(
        ({ data }: any) => {
          this.series = data.results;
        }
      );

      this.ApiService.getCharacterStories(params.id).subscribe(
        ({ data }: any) => {
          this.stories = data.results;
        }
      );
    });
  }
  addToFav(key: string, item: Object) {
    LocalStorage.favoriteAdd(key, item);
  }
}
