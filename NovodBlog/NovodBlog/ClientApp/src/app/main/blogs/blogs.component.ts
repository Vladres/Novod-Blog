import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../Services/Articles/article.service';
import { Article } from '../../Models/Article';


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
