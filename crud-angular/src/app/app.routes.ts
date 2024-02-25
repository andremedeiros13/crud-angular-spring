import { Routes } from '@angular/router';
import { CoursesComponent } from './courses/courses/courses.component';

export const routes: Routes = [
  {path : '', pathMatch: 'full',redirectTo: 'courses'},
  { path: 'courses', component: CoursesComponent },
];
