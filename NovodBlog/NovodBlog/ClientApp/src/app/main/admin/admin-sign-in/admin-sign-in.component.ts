import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { AuthService } from '../../../Services/Auth/auth.service';

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
  }

  public async login() {
    await this.authService.login(this.myForm.value.login, this.myForm.value.password)
      .then(response => {
        return this.router.navigate(['adminPanel/AddingPanel']);
      })
      .catch(er => {
        console.log(er);
        this.serverError = er.message;
      });
  }
}
