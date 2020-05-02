import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from '../Services/Auth/auth.service';
import { of } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-sign-in',
  templateUrl: './admin-sign-in.component.html',
  styleUrls: ['./admin-sign-in.component.scss']
})

export class AdminSignInComponent implements OnInit {
  myForm: FormGroup;
  public serverError: string;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, firestore: AngularFirestore, private router: Router) {
    this.myForm = formBuilder.group({
      "login": ["", [Validators.required]],
      "password": ["", [Validators.required]]
    });
  }
  ngOnInit(): void {
    if (this.authService.user$) {
      this.router.navigate(['adminPanel/AddingPanel']);
    }
  }

  public async login() {
    await this.authService.login(this.myForm.value.login, this.myForm.value.password)
      .then(response => {
        this.authService.user$ = of(true);
        this.router.navigate(['adminPanel/AddingPanel']);
      })
      .catch(er => {
        console.log(er);
        this.serverError = er.message;
      });
  }
}
