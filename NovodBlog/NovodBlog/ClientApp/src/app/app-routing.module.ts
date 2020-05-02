import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from "./about/about.component";
import { HomeComponent } from './home/home.component';
import { ContentPageComponent } from './content-page/content-page.component';
import { ItemComponent } from './item/item.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { AdminSignInComponent } from "./admin-sign-in/admin-sign-in.component";

const routes: Routes = [
  {path : '' , component : HomeComponent },
  {path : 'about', component : AboutComponent },
  {path : 'content', component : ContentPageComponent  },
  { path: "content/item/:id", component: ItemComponent },
  { path: 'adminPanel', component: AdminSignInComponent },
  {path: '**', redirectTo: '/', pathMatch : "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
