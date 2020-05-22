import { Component, OnInit } from '@angular/core';
import { Article, ArticleService } from '../Services/Articles/article.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
  animations: [
    trigger('EnterItem', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1s', style({ opacity: 1 }))
      ])
    ])
  ]
})
export class ItemComponent implements OnInit {

  constructor(private activateRoute: ActivatedRoute,private articleService : ArticleService) { }

  public id;
  public item; 

  ngOnInit(): void {
    this.activateRoute.params.subscribe(result => this.id = result["id"]);
    this.articleService.getArticlesByID(this.id).subscribe(result => this.item = result);
  }

}
