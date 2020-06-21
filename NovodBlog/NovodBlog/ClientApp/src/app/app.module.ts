import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { AngularFireModule } from '@angular/fire';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { BlogsComponent } from './main/blogs/blogs.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';

import { SliderComponent } from './main/slider/slider.component';
import { NavComponent } from './main/nav/nav.component';
import { FooterComponent } from './main/footer/footer.component';
import { AboutComponent } from "./main/about/about.component";
import { HomeComponent } from './main/home/home.component';
import { ContentPageComponent } from './main/content-page/content-page.component';
import { ItemComponent } from './main/item/item.component';
import { SubscribeComponent } from './main/subscribe/subscribe.component';
import { DialogUpdateComponent } from './main/MatDialog/dialog-update/dialog-update.component';
import { DialogDeleleComponent } from './main/MatDialog/dialog-delele/dialog-delele.component';
import { PageNotFoundComponent } from './main/page-not-found/page-not-found.component';

import { ArticleService } from './Services/Articles/article.service';
import { ImagesService } from './Services/images.service';
import { AuthService } from './Services/Auth/auth.service';
import { SubscribeService } from './Services/Subscribe/subscribe.service';
import { AdminModule } from './main/admin/admin.module';


@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    BlogsComponent,
    NavComponent,
    FooterComponent,
    AboutComponent,
    HomeComponent,
    ContentPageComponent,
    ItemComponent,
    SubscribeComponent,
    DialogUpdateComponent,
    DialogDeleleComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgbModule,
    AdminModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatDialogModule,
    MatCheckboxModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatMenuModule,
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyBnhupVdK_Taq6alpihcms3mQAVYMTBNbE" 
    }),
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [
    ImagesService,
    ArticleService,
    AuthService,
    ReactiveFormsModule,
    SubscribeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
