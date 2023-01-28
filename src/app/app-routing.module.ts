import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobFormComponent } from './job-form/job-form.component';
import { JobListComponent } from './job-list/job-list.component';

const routes: Routes = [
  {
    path:'',
    component:JobListComponent
  },
  {
    path:'jobs',
    component:JobListComponent
  },
  {
    path:'jobs/:id',
    component:JobFormComponent
  },
  {
    path:'jobs/new',
    component:JobFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
