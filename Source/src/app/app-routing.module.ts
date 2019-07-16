import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { GalleryMainComponent } from './gallery/gallery-main/gallery-main.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'gallery', component: GalleryMainComponent},
  //{ path: 'events', loadChildren: () => import('./admin/admin.module').then(mod => mod.AdminModule)},
  { path: 'events', loadChildren: './events/events.module#EventsModule'},
  { path: 'blogs', loadChildren: './blogs/blogs.module#BlogsModule'},
  //{ path: 'customers/:id', component: CustomerEditReactiveComponent },
  { path: '**', pathMatch:'full', redirectTo: '/home' } //catch any unfound routes and redirect to home page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
