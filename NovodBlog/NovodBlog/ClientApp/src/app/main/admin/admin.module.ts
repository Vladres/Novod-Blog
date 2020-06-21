import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { AngularFireAuthGuard } from '@angular/fire/auth-guard';

import { AdminSignInComponent } from './admin-sign-in/admin-sign-in.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';


const routes: Routes = [
  { path: '', component: AdminSignInComponent },
  {
    path: 'AddingPanel',
    component: AdminPanelComponent,
    canActivate: [AngularFireAuthGuard]
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AdminSignInComponent,
    AdminPanelComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule,
    MatInputModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
