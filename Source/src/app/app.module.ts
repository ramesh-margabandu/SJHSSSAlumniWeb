import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { GalleryMainComponent } from './gallery/gallery-main/gallery-main.component';
import { RootHeaderComponent } from './root-header/root-header.component';
import { AboutComponent } from './about/about.component';
import { AlumniComponent } from './alumni/alumni.component';
import { TeachersComponent } from './teachers/teachers.component';
import { RootFooterComponent } from './root-footer/root-footer.component';

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
    RootFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent, RootHeaderComponent, RootFooterComponent]
})
export class AppModule { }
