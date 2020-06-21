import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from "./main/about/about.component";
import { HomeComponent } from './main/home/home.component';
import { ContentPageComponent } from './main/content-page/content-page.component';
import { ItemComponent } from './main/item/item.component';
import { PageNotFoundComponent } from './main/page-not-found/page-not-found.component';


const routes: Routes = [
  { path: 'home' , component : HomeComponent },
  { path: 'about', component : AboutComponent },
  { path: 'content', component : ContentPageComponent  },
  { path: 'content/item/:id', component: ItemComponent },
  { path: 'adminPanel', loadChildren: './main/admin/admin.module#AdminModule' },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
