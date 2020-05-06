import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray} from '@angular/forms';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.scss']
})
export class SubscribeComponent implements OnInit {

  subscribeForm: FormGroup;

  constructor() {
    this.subscribeForm = new FormGroup({
      "userName": new FormControl("", [Validators.required]),
      "userEmail": new FormControl("", [
        Validators.required,
        Validators.email
      ])
    });
  }

  ngOnInit(): void {
  }

}
