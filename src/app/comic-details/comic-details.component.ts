import { ApiService } from './../api.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comic-details',
  templateUrl: './comic-details.component.html',
  styleUrls: ['./comic-details.component.scss'],
})
export class ComicDetailsComponent implements OnInit {
  id: number;
  comic: {
    creators: { items: Array<{ role: String }> };
    dates: Array<{ type: String }>;
  };
  loading: boolean = true;
  constructor(private route: ActivatedRoute, private ApiService: ApiService) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.ApiService.getComicDetials(params.id).subscribe(({ data }: any) => {
        this.comic = data.results[0];
        this.loading = false;
      });
    });
  }

  getDate(): string {
    let onsaleDate: any;
    var options = {
      year: 'numeric',
      month: 'long',
      day: '2-digit',
    };
    onsaleDate = this.comic.dates.find((item) => item.type === 'onsaleDate');
    const date = new Date(onsaleDate.date);
    return date.toLocaleDateString('en-US', options);
  }

  getWriter(): Object {
    return this.comic.creators.items.find((item) => item.role === 'writer');
  }

  getCover(): Object {
    return this.comic.creators.items.find(
      (item) => item.role === 'penciller (cover)'
    );
  }
}
