import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})

export class AboutComponent implements OnInit {
  latitude = 49.34991;
  longitude = 23.50561;
  constructor() { }
  ngOnInit(): void {
  }
}
