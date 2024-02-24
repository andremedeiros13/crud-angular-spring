import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { Course } from '../model/course';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CoursesService } from '../services/courses.service';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatCardModule, MatToolbarModule, HttpClientModule],
  providers: [CoursesService],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss',
})
export class CoursesComponent {
  courses: Observable<Course[]>;
  displayedColumns = ['name', 'category'];

  constructor(private cousersService: CoursesService) {
    this.courses = this.cousersService.list();
  }

  ngOnInit(): void {}
}
