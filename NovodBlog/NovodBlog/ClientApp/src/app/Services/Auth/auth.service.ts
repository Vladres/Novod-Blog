import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public user$: Observable<boolean>;
  public userDetails;

  constructor(private afAuth: AngularFireAuth, private afs: AngularFirestore) {}

  public async login(email: string, password: string) {
    return await this.afAuth.signInWithEmailAndPassword(email, password);
  }

}
