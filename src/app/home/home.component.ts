import { Component, OnInit } from '@angular/core';
import {ArticlesDataService} from '../services/articles-data.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
 
})
export class HomeComponent implements OnInit {

  realListArticles: any = [];
  listToDisplay: any[] = [];
  constructor(private articlesData:ArticlesDataService) { 
    this.articlesData.articles().subscribe((data:any)=>{
      
      this.realListArticles = data;
      this.listToDisplay = data.slice(this.startIndex, this.endIndex+1)
    
    });
  }
  
  ngOnInit(): void {
  }

 

  startIndex = 0;
  nrDisp = 2;
  endIndex = this.nrDisp - 1;
 
  goNext() {
    if (this.startIndex + this.nrDisp< this.realListArticles.length) {
        this.startIndex += this.nrDisp;
        this.endIndex +=this.nrDisp;
        this.listToDisplay = this.realListArticles.filter((elem:any)=> {
          return this.realListArticles.indexOf(elem, 0)>=this.startIndex &&  this.realListArticles.indexOf(elem, 0)<=this.endIndex
        });
    }
  }

  goPrev() {
    if (this.startIndex > 0) {
      this.startIndex -= this.nrDisp;
      this.endIndex -=this.nrDisp;
      this.listToDisplay = this.realListArticles.filter((elem:any)=> {
        return this.realListArticles.indexOf(elem, 0)>=this.startIndex &&  this.realListArticles.indexOf(elem, 0)<=this.endIndex
      });
  }
  }

  refetch() {
    this.articlesData.articles().subscribe((data:any)=>{
      
      this.realListArticles = data;

      if (this.startIndex == 0) {
          this.listToDisplay = data.slice(this.startIndex, this.endIndex+1);
      } else if (this.startIndex == data.length ) {
        this.listToDisplay =data.slice(this.startIndex-this.nrDisp, this.endIndex-this.nrDisp+1);
        this.endIndex -=this.nrDisp;
        this.startIndex -=this.nrDisp;
      } else {
        this.listToDisplay = data.slice(this.startIndex, this.endIndex+1);
      }
    
    });
  }
 
}
