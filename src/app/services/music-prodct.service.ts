import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MusicProdctService {
  readonly API_URL = 'http://localhost:8080/musicals/showAllMusical';

  constructor(
    private http: HttpClient
  ) { }


  getMusicList(){
    return this.http.get(this.API_URL);
  }
  
}
