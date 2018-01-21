import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Student } from '../student';
import { Teacher } from '../teacher';

@Injectable()
export class StudentsService {
  // URL to web API
  private studentUrl = 'students/students.json';
  private teacherUrl = 'students/teachers.json';

  constructor(
    private http: HttpClient) {

  }

  getStudent (studentId): Observable<Student[]> {
    return this.http.get<Student[]>('students/' + studentId + '.json')
      .pipe(
        catchError(this.handleError('getStudent', [])));
  }

  getUsers(): Observable<Student[]> {
    console.log('BOO', this.http.get<Student[]>(this.studentUrl));
    return this.http.get<Student[]>(this.studentUrl);
  }

  getTeacher(): Observable<Teacher[]> {
    console.log('BOO', this.http.get<Teacher[]>(this.teacherUrl));
    return this.http.get<Teacher[]>(this.teacherUrl);
  }

  /** GET beers from the server */
  getStudents (): Observable<Student[]> {
    return this.http.get<Student[]>(this.studentUrl)
      .pipe(
        catchError(this.handleError('getStudents', [])));
  }
  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
