import { Component, OnInit } from '@angular/core';
import { ArticleService, Article } from '../Services/Articles/article.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit {

  public articles: Article[] ;
  
  constructor(private articleService : ArticleService) { }

  ngOnInit(): void {
    this.articleService.getArticles().subscribe((result: Article[]) => { this.articles = result; console.log(this.articles); });
  }

}
