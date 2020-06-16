import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from "./about/about.component";
import { HomeComponent } from './home/home.component';
import { ContentPageComponent } from './content-page/content-page.component';
import { ItemComponent } from './item/item.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { AdminSignInComponent } from "./admin-sign-in/admin-sign-in.component";
import { AngularFireAuthGuard } from '@angular/fire/auth-guard';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  { path: 'home' , component : HomeComponent },
  { path: 'about', component : AboutComponent },
  { path: 'content', component : ContentPageComponent  },
  { path: 'content/item/:id', component: ItemComponent },
  { path: 'adminPanel', component: AdminSignInComponent },
  {
    path: 'adminPanel/AddingPanel',
    component: AdminPanelComponent,
    canActivate: [AngularFireAuthGuard]
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
