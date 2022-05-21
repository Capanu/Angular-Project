import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleDataService } from '../services/article-data.service';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {


  params:any=0;
  article: any={
    "title": "",
    "tag": "",
    "author": "",
    "date": "",
    "imgUrl": "",
    "content": "",
    "id": new Date().valueOf(),
    "saying": "Love at first bite."
  }
  constructor(private router:ActivatedRoute, private articleData:ArticleDataService) {
    console.log(this.router.snapshot.params);
    this.params = this.router.snapshot.params;
    if (this.params.id !=-1) {
        this.articleData.article(this.params.id).subscribe((data)=>{
          this.article = data;
          
        });
    }

   }

 
  ngOnInit(): void {
  
  }
  updateArticle() {
    console.log(this.article);
    // this.articleData.articleUpdate(this.article);
  }
  getValues() {
    let title:any=  document.getElementById('title');
    let tag:any=  document.getElementById('tag');
    let author:any=  document.getElementById('author');
    let date:any=  document.getElementById('date');
    let imgUrl:any=  document.getElementById('imgUrl');
    let content:any=  document.getElementById('content');
   
    let payload = {
     
      id: this.article.id,
      title:  title.value ,
      tag: tag.value,
      author: author.value,
      date: date.value,
      imgUrl: imgUrl.value,
      saying: "My spirit soars where the air goes thin.",
      content: content.value
    }
  
    if (this.params.id !=-1) {  
      this.articleData.articleUpdate(payload).subscribe((data)=>{
        alert("Update Succsesful!");
        
      });
    } else {
      this.articleData.articleAdd(payload).subscribe((data)=>{
        alert("Add Succsesful!");
        
      });
    }


  }

}
