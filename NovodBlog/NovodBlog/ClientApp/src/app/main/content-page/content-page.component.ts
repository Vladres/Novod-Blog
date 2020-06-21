import { Component, OnInit } from '@angular/core';
import { Article } from '../../Models/Article';
import { ArticleService } from '../../Services/Articles/article.service';


@Component({
  selector: 'app-content-page',
  templateUrl: './content-page.component.html',
  styleUrls: ['./content-page.component.scss']
})

export class ContentPageComponent implements OnInit {

  public articles : Article [];
  
  constructor(private articlesServise : ArticleService) { }

  ngOnInit(): void {
    this.articlesServise.getArticles().subscribe((result : Article[]) => this.articles = result)
  }

}
