import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ArticleDataService {

   url="http://localhost:3000/articles/"
  constructor(private http: HttpClient) { }
  article(id: number) {
      return this.http.get(this.url+id);
  }


  articleUpdate(article:any) {
    return this.http.put(this.url+article.id, article);
  } 

  articleAdd(article:any) {
    return this.http.post("http://localhost:3000/articles", article);
  } 


  deleteArticle(article:any) {
    return this.http.delete(this.url+article.id);
  } 

}
