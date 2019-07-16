import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogsMainComponent } from './blogs-main/blogs-main.component';
import { BlogsListComponent } from './blogs-list/blogs-list.component';
import { BlogsDetailComponent } from './blogs-detail/blogs-detail.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', component: BlogsMainComponent,
    children: [
      { path: '', component: BlogsListComponent} ,
      { path: ':id', component: BlogsDetailComponent} ] 
    } 
];

@NgModule({
  declarations: [
    BlogsMainComponent,
    BlogsListComponent,
    BlogsDetailComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class BlogsModule { }
