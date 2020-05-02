import { Component, OnInit } from '@angular/core';
import { Article, ArticleService } from '../Services/Articles/article.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.scss']
})
export class AdminPanelComponent implements OnInit {
  public myForm: FormGroup;
  done: boolean = false;

  constructor(private articleService: ArticleService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.myForm = this.formBuilder.group({
      "Title":  ["", [Validators.required]],
      "Text":  ["", [Validators.required]],
      "imgSource": ["", [Validators.required]]
    });
  }

  save() {
    console.log(this.myForm.value);
    this.articleService.addArticle(this.myForm.value).subscribe((data: Article) => { this.done = true; }, error => console.log(error));
  }

}
