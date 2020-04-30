import { Component, OnInit } from '@angular/core';
import { ImagesService } from '../Services/images.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  constructor(private imagesService : ImagesService) { }

  images : string[] ;

  ngOnInit(): void {
    this.imagesService.getImages().subscribe(result => this.images = result);
  }

}
