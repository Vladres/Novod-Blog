import { Component, OnInit, HostBinding } from '@angular/core';
import { trigger, state, transition, animate, style, query, stagger, group } from '@angular/animations';
import { ImagesService } from '../../Services/images.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  animations: [
    trigger('expandedPanel',[
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(-100%)'}),
        animate('1.5s', style({ opacity: 1, transform: 'none' }))
      ])
    ])
  ]
})
export class SliderComponent implements OnInit {
 
  constructor(private imagesService : ImagesService) { }

  images : string[] ;
 
  ngOnInit(): void {
    this.imagesService.getImages().subscribe(result => this.images = result);
  }

}

