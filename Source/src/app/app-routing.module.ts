import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { GalleryMainComponent } from './gallery/gallery-main/gallery-main.component';
import { EventListComponent } from './events/event-list/event-list.component';
import { EventDetailComponent } from './events/event-detail/event-detail.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'gallery', component: GalleryMainComponent},
  { path: 'events', 
    children: [
      {path: "", component: EventListComponent},
      { path: ':id', component: EventDetailComponent}
    ]},
  //{ path: 'customers/:id', component: CustomerEditReactiveComponent },
  { path: '**', pathMatch:'full', redirectTo: '/home' } //catch any unfound routes and redirect to home page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
