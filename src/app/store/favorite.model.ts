export interface Favorite {
  comics: Array<Object>;
  characters: Array<Object>;
  counter: number;
  series: Array<Object>;
}

export interface FavoritePayload {
  key: string;
  value: any;
}
