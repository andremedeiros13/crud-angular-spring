import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { Course } from '../model/course';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CoursesService } from '../services/courses.service';
import { HttpClientModule } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from '../../shared/components/error-dialog/error-dialog.component';
import { CategoryPipe } from "../../shared/pipes/category.pipe";
import {MatIconModule} from '@angular/material/icon';

@Component({
    selector: 'app-courses',
    standalone: true,
    providers: [CoursesService],
    templateUrl: './courses.component.html',
    styleUrl: './courses.component.scss',
    imports: [
        CommonModule,
        MatTableModule,
        MatCardModule,
        MatToolbarModule,
        HttpClientModule,
        MatProgressSpinnerModule,
        ErrorDialogComponent,
        CategoryPipe,
        MatIconModule
    ]
})
export class CoursesComponent {
  courses$: Observable<Course[]>;
  displayedColumns = ['name', 'category'];

  constructor(
    private cousersService: CoursesService,
    public dialog: MatDialog
  ) {
    this.courses$ = this.cousersService.list().pipe(
      catchError((err) => {
        this.onError('Erro ao carregar os cursos.')
        return of([]);
      })
    );
  }

  ngOnInit(): void {}

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg,
    });
  }
}
