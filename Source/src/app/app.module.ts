import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { httpInterceptorProviders } from './http-interceptors';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { GalleryMainComponent } from './gallery/gallery-main/gallery-main.component';
import { RootHeaderComponent } from './root-header/root-header.component';
import { AboutComponent } from './about/about.component';
import { AlumniComponent } from './alumni/alumni.component';
import { TeachersComponent } from './teachers/teachers.component';
import { RootFooterComponent } from './root-footer/root-footer.component';
import { UpcomingEventsComponent } from './home/upcoming-events/upcoming-events.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    GalleryMainComponent,
    RootHeaderComponent,
    AboutComponent,    
    AlumniComponent,
    TeachersComponent,
    RootFooterComponent,
    UpcomingEventsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent, RootHeaderComponent, RootFooterComponent]
})
export class AppModule { }
