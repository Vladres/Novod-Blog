import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray} from '@angular/forms';
import { SubscribeService } from '../../Services/Subscribe/subscribe.service';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.scss']
})
export class SubscribeComponent implements OnInit {

  done: boolean = false;
  subscribeForm: FormGroup;
  public serverError: string;

  constructor(private subscribeService: SubscribeService) {
    this.subscribeForm = new FormGroup({
      "name_of_subscriber": new FormControl("", [Validators.required]),
      "email": new FormControl("", [
        Validators.required,
        Validators.email
      ])
    });
  }

  ngOnInit(): void {
  }

  addSubscriber() {
    this.subscribeService.addSubsriber(this.subscribeForm.value).subscribe((data) => { this.done = true; },
      error => { console.log(error); this.serverError = error.message; this.done = false; });
  }

 
}
