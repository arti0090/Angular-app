import { Injectable } from '@angular/core';
import { Trip } from './trip';
// import { TRIPS } from './mock-trips';
import { Observable, of} from 'rxjs';
import { MessageService } from './message.service';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class TripService {

  private tripsUrl = 'api/trips'; // URL to web api


  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }


  // getTrips(): Observable<Trip[]> {
  //   // send message after fetching trips
  //   this.messageService.add('TripService: fetched trips');
  //   return of (TRIPS);
  // }
  // getTrip(id: number ): Observable<Trip> {
  //     this.messageService.add(`TripService: fetched trip id=${id}`);
  //     return of(TRIPS.find(trip => trip.id === id ));
  // }   // used for TRIPS as mocked table

  // GET trips from server
    getTrips (): Observable<Trip[]> {
      return this.http.get<Trip[]>(this.tripsUrl)
      .pipe(tap(trips => this.log('fetched trips')),
       catchError(this.handleError('getTrips', []))
    );
    }
    // GET trip by id
    getTrip(id: number): Observable<Trip> {
      const url = `${this.tripsUrl}/${id}`;
      return this.http.get<Trip>(url).pipe(
        tap(_ => this.log(`fetched trip id=${id}`)),
        catchError(this.handleError<Trip>(`getTrip id=${id}`))
      );
    }

    // PUT update trip on server
    updateTrip (trip: Trip): Observable<any> {
      return this.http.put(this.tripsUrl, trip, httpOptions).pipe(
        tap(_ => this.log(`updated trip id=${trip.id}`)),
        catchError(this.handleError<any>('updateTrip'))
      );

    }
    // POST: add new trip on server

  addTrip ( trip: Trip): Observable<Trip> {
    return this.http.post<Trip>(this.tripsUrl, trip, httpOptions).pipe(
      // tslint:disable-next-line:no-shadowed-variable
      tap(( trip: Trip) => this.log(`added trip with id=${trip.id}`)),
      catchError(this.handleError<Trip>('addTrip'))
    );
  }

  // DELETE: delete trip

  deleteTrip (trip: Trip | number): Observable<Trip> {
    const id = typeof trip === 'number' ? trip : trip.id;
    const url = `${this.tripsUrl}/${id}`;

    return this.http.delete<Trip>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted trip id=${id}`)),
      catchError(this.handleError<Trip>('deletedTrip'))
    );
  }

  // GET trip with search term

  searchTrip(term: string): Observable<Trip[]> {
    if (!term.trim()) {
      // if empty,return epmty array
      return of([]);
    }
    return this.http.get<Trip[]>(`${this.tripsUrl}/?name=${term}`).pipe(
      tap(_ => this.log(`found trips matching "${term}"`)),
      catchError(this.handleError<Trip[]>(`searchTrips` , []))
    );
  }




  /** Log a TripService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`TripService: ${message}`);
  }


  private handleError<T> (operation = 'operation' , result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);

      this.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }


}
