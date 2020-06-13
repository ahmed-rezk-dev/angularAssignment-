import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { api_url } from './helper';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}
  // Http Headers
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  getUrl(path: string): string {
    return `https://gateway.marvel.com:443/v1/public/${path}?ts=1592059872&apikey=ef105031fcd0c0bceb0ac33d618c78d7&hash=5ceec93a6a4e2ded6b7489054abb7ca0`;
  }

  getCharacters() {
    return this.http.get(this.getUrl('characters'));
  }
  getCreators() {
    return this.http.get(this.getUrl('creators'));
  }
}
