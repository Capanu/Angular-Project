import { Injectable } from '@angular/core';
import  {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ArticlesDataService {
url="http://localhost:3000/articles"
  constructor(private http:HttpClient) { }
  articles() {
    return this.http.get(this.url);
  }
}
