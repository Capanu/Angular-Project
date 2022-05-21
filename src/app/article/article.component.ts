import { Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import { ArticleDataService } from '../services/article-data.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  @Output() updateDataEvent = new EventEmitter();
  constructor(private articleData:ArticleDataService) { }
  @Input() article ={
    "title": "The complete guide to explore Trasilvania, with your bike",
    "tag": "Destination Europe",
    "author": "Jonnathan Mercadina",
    "date": "July 01, 2013",
    "imgUrl": "https://picsum.photos/id/866/1280/720",
    "content": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est totam laboriosam debitis magnam voluptatum, incidunt neque. Totam ullam non quis, repellendus molestiae in itaque natus labore quos ipsum alias, veritatis nihil! Quisquam labore, sequi minima expedita necessitatibus omnis error amet recusandae atque commodi quia! Vel laborum recusandae voluptatum rerum id harum, fuga beatae ut, consequuntur repellendus ipsum temporibus libero itaque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde quod tempore quaerat deserunt. Voluptatibus possimus, magni quas rem adipisci, esse ipsa fuga, fugit eos repellendus quis? Dicta perferendis, doloremque provident repellendus natus fugit obcaecati, voluptate odio, nulla similique officia. Iure at aliquam dicta provident nulla modi optio maiores. Similique eos molestiae earum voluptatum nostrum porro, consequuntur nihil ex earum. Voluptatum placeat labore necessitatibus repellat. Repudiandae velit suscipit amet tenetur, mollitia aut dolor ipsa delectus a autem ut quibusdam incidunt? Nisi facilis voluptatem omnis debitis laborum cupiditate pariatur inventore molestiae eveniet!",
    "id": 1,
    "saying": "Love at first bite."
  }
  ngOnInit(): void {
  }


  deleteArticle(article:any) {
    this.articleData.deleteArticle(article).subscribe((data)=>{
      alert("Deleted Succsesful!");
      this.updateDataEvent.emit();
    })
  }
}
