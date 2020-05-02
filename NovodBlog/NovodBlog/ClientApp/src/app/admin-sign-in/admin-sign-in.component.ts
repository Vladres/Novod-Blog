import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-sign-in',
  templateUrl: './admin-sign-in.component.html',
  styleUrls: ['./admin-sign-in.component.scss']
})

export class AdminSignInComponent implements OnInit {
  myForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.myForm = formBuilder.group({
      "login": ["", [Validators.required]],
      "password": ["", [Validators.required]]
    });
  }
  ngOnInit(): void {
  }
}
