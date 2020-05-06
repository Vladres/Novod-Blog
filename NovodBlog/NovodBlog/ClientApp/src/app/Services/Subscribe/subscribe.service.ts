import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SubscribeService {

  private url = "api/Subscribers";

  constructor(private http: HttpClient) { }

  getSubsribers() {
    return this.http.get(this.url);
  }

  getSubsriberByID(id: number) {
    return this.http.get(this.url + "/" + id);
  }

  addSubsriber(value: Subsriber) {
    return this.http.post(this.url, value);
  }

  updateSubsriber(value: Subsriber) {
    return this.http.put(this.url, value);
  }
}


export class Subsriber {
  constructor(
    id_subscriber: number,
    email: string,
    name_of_subscriber: string) {}
}
