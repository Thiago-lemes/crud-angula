import { ErrorDialogComponent } from './../../shared/components/error-dialog/error-dialog.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { catchError, Observable, of } from 'rxjs';

import { Course } from './../model/course';
import { CoursesService } from './../services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit{

courses$:Observable<Course []> ;
displayedColumns=['name', 'category'];

  constructor(private coursesService: CoursesService,
    public dialog: MatDialog
    ){
    this.courses$ = this.coursesService.list()
    .pipe(
      catchError(error =>{
       this.onError('Erro ao carregar o curso');
        return of([])
      })
    );
  }

 onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }

  ngOnInit(): void {

  }

}
