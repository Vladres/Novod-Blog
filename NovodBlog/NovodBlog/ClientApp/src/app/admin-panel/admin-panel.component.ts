import { Component, OnInit } from '@angular/core';
import { Article, ArticleService } from '../Services/Articles/article.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../Services/Auth/auth.service';
import { Router } from '@angular/router';
import { SubscribeService, SubsriberOfMyBlog } from '../Services/Subscribe/subscribe.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogUpdateComponent } from '../MatDialog/dialog-update/dialog-update.component';
import { DialogDeleleComponent } from '../MatDialog/dialog-delele/dialog-delele.component';
import { log } from 'util';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.scss']
})
export class AdminPanelComponent implements OnInit {

  public myForm: FormGroup;
  public done: boolean = false;
  public serverError: string;
  public articles: Article[] = [{ id: 1, title: "test", subText: "test", text: "test", imgSource: " " }];
  public subscribers: SubsriberOfMyBlog[];
  public EditItem: Article;


  constructor(private articleService: ArticleService,
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private subscribeService: SubscribeService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.myForm = this.formBuilder.group({
      "Title":  ["", [Validators.required]],
      "Text":  ["", [Validators.required]],
      "imgSource": ["", [Validators.required]],
      "subText": ["", [Validators.required]]
    });

    this.loadArticle()
    this.loadSubscriber()
  }

  openDialogCreate(article: Article): void {
    const dialogRef = this.dialog.open(DialogUpdateComponent, {
      width: '500px',
      data: article
    });

    dialogRef.afterClosed().subscribe((result: Article) => {
      if (result)
        this.articleService.updateArticle(result).subscribe(data => { this.loadArticle()})
    });
  }

  openDialogDelete(idOfElement: number): void {
    const dialogRef = this.dialog.open(DialogDeleleComponent, {
      width: '30%',
      data: { id: idOfElement }
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result)
        this.delete(result.id)
      console.log(result.id);
    });
  }

  loadArticle() {
    this.articleService.getArticles().subscribe((data: Article[]) => this.articles = data);
  }

  loadSubscriber() {
    this.subscribeService.getSubsribers().subscribe((data: SubsriberOfMyBlog[]) => { this.subscribers = data })
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

  deleteSubscriber(id: number) {
    this.subscribeService.deleteSubscriber(id).subscribe(data => this.loadSubscriber(),
      error => { console.log(error); });
  } 
}
