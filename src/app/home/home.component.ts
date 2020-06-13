import { ApiService } from '../api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  characters: Object;
  creators: Object;
  loading: boolean = true;
  constructor(private ApiService: ApiService) {}

  ngOnInit(): void {
    // Fetch characters
    this.characters = this.ApiService.getCharacters().subscribe(
      ({ data }: any) => {
        this.characters = data.results;
        this.loading = false;
      }
    );
    // Fetch creators
    this.characters = this.ApiService.getCreators().subscribe(
      ({ data }: any) => {
        this.creators = data.results;
      }
    );
  }
}
