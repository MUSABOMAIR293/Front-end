import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReqiustService {
  readonly API_URL = 'http://localhost:8080/requests/add';

  constructor(
    private http: HttpClient
  ) { }

 BulidRequist(requests:any):Observable<any>{
  return this.http.post(this.API_URL,requests);
 }
}
