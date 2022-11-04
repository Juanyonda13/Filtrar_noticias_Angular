import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoticiaService {

  constructor(private http:HttpClient) { 
    
  }
  getNoticias(parametros:any):Observable<any>{
    const url=' https://newsapi.org/v2/top-headlines?country='+parametros.pais+'&category='+parametros.categoria+'&apiKey=bfe46e42eaa042a8942f7783dd602dfd'
    return this.http.get(url)
  }
}
