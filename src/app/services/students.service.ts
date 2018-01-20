import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Student } from '../student';

@Injectable()
export class StudentsService {
  // URL to web API
  private studentUrl = 'students/students.json';

  constructor(
    private http: HttpClient) {

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
