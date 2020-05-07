import { Component, OnInit } from '@angular/core';
import { Article, ArticleService } from '../Services/Articles/article.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../Services/Auth/auth.service';
import { Router } from '@angular/router';
import { SubscribeService, SubsriberOfMyBlog } from '../Services/Subscribe/subscribe.service';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.scss']
})
export class AdminPanelComponent implements OnInit {

  public myForm: FormGroup;
  public done: boolean = false;
  public serverError: string;
  public articles: Article[];
  public subscribers: SubsriberOfMyBlog []

  constructor(private articleService: ArticleService,
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private subscribeService: SubscribeService
  ) { }

  ngOnInit(): void {
    this.myForm = this.formBuilder.group({
      "Title":  ["", [Validators.required]],
      "Text":  ["", [Validators.required]],
      "imgSource": ["", [Validators.required]],
      "subText": ["", [Validators.required]]
    });

    this.loadArticle()
    this.articleService.getArticles().subscribe((result: Article[]) => this.articles = result)
    this.subscribeService.getSubsribers().subscribe((data: SubsriberOfMyBlog[]) => { this.subscribers = data })
  }

  loadArticle() {
    this.articleService.getArticles()
      .subscribe((data: Article[]) => this.articles = data);
  }

  save() {
    console.log(this.myForm.value);
    this.articleService.addArticle(this.myForm.value).subscribe((data: Article) => { this.done = true; this.loadArticle()},
      error => { console.log(error); this.serverError = error.message; this.done = false; });
  }

  delete(id: number) {
    this.articleService.deleteArticle(id).subscribe(data => this.loadArticle(),
      error => { console.log(error);});
  } 
}
