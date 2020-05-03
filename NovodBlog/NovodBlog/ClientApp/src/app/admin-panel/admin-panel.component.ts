import { Component, OnInit } from '@angular/core';
import { Article, ArticleService } from '../Services/Articles/article.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../Services/Auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.scss']
})
export class AdminPanelComponent implements OnInit {
  public myForm: FormGroup;
  public done: boolean = false;
  public serverError: string;

  constructor(private articleService: ArticleService, private authService: AuthService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.myForm = this.formBuilder.group({
      "Title":  ["", [Validators.required]],
      "Text":  ["", [Validators.required]],
      "imgSource": ["", [Validators.required]],
      "subTitle": ["", [Validators.required]]
    });
  }

  save() {
    console.log(this.myForm.value);
    this.articleService.addArticle(this.myForm.value).subscribe((data: Article) => { this.done = true; },
      error => { console.log(error); this.serverError = error; this.done = false; });
  }

  signOut() {
    this.authService.signOut();
    this.router.navigate(['adminPanel']);
  }
 
}
