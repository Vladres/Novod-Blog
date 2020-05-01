import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  latitude = 51.678418;
  longitude = 7.809007;
  constructor() { }

  ngOnInit(): void {
  }

}
