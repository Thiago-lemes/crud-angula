import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, first, tap, } from 'rxjs/operators';


import { Course } from './../model/course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

private readonly API = '/assets/acourses.json';


  constructor(private httpClient: HttpClient) { }

  list(){
    return this.httpClient.get<Course[]>(this.API).pipe(
      first(),
      delay(500),
      tap(courses => console.log(courses))
    );
  }
}
