import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SliderComponent } from './slider/slider.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ImagesService } from './Services/images.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { MatDialogModule} from '@angular/material/dialog';
import { BlogsComponent } from './blogs/blogs.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from "./about/about.component";
import { HomeComponent } from './home/home.component';
import { ArticleService } from './Services/Articles/article.service';
import { ContentPageComponent } from './content-page/content-page.component';
import { ItemComponent } from './item/item.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';
import { AdminSignInComponent } from './admin-sign-in/admin-sign-in.component';
import { MatInputModule } from '@angular/material/input';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AuthService } from './Services/Auth/auth.service';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { SubscribeService } from './Services/Subscribe/subscribe.service';
import { DialogUpdateComponent } from './MatDialog/dialog-update/dialog-update.component';
import { DialogDeleleComponent } from './MatDialog/dialog-delele/dialog-delele.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

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
    AdminPanelComponent,
    AdminSignInComponent,
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
    FormsModule,
    SubscribeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
