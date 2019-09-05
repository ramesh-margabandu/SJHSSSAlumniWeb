import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventListComponent } from './event-list/event-list.component';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { Routes, RouterModule } from '@angular/router';
import { EventsComponent } from './events.component';

const routes: Routes = [
  {
    path: '', component: EventsComponent,
      children: [
      { path: '', component: EventListComponent},
      { path: ':id', component: EventDetailComponent} ]}   
];

@NgModule({
  declarations: [EventListComponent, EventDetailComponent, EventsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class EventsModule { }
