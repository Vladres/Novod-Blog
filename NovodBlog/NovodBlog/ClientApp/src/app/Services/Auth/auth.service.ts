import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public user$: Observable<any>;
  public userDetails;

  constructor(private afAuth: AngularFireAuth, private afs: AngularFirestore) {
    this.user$ = this.afAuth.authState.pipe(      switchMap(user => {        if (user) {          this.userDetails = user;          return of(user);        } else {          this.userDetails = null;          return of(null);        }      })    );

  }

  public async login(email: string, password: string) {
    return await this.afAuth.signInWithEmailAndPassword(email, password);
  }

  public async signOut() {
    return await this.afAuth.signOut();
  }
}
