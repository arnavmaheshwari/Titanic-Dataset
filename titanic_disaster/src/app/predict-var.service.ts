import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PredictVarService {

  private baseUrl = 'http://127.0.0.1:5000/predict';

  constructor(private http: HttpClient) { }

  predict(data: any){
    const headers = { 'content-type': 'application/json'};
    const Option = {
      headers: new HttpHeaders(headers)
    }
    return this.http.post(`${this.baseUrl}`,data,Option)  
  }

}
