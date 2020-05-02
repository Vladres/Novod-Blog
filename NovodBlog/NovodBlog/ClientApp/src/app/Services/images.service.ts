import { Injectable } from '@angular/core';
import { Observable , of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  private images : string[] = ["https://i.pinimg.com/originals/0e/9e/88/0e9e8812f01f82650833264673bf51ed.jpg",
                       "https://wallpapercave.com/wp/wp2394184.jpg",
                       "https://images.wallpaperscraft.ru/image/sportkar_avtomobil_doroga_168267_3840x2160.jpg"]

  constructor() { }

  getImages() : Observable<string[]> {
    return of(this.images);
  }
  addImage(value : string){
    this.images.push(value);
  }
}
