import { Component, OnInit } from '@angular/core';
import {Observable, Subject } from 'rxjs';

import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

import { Trip } from '../Trip';
import { TripService } from '../trip.service';

@Component({
  selector: 'app-trip-search',
  templateUrl: './trip-search.component.html',
  styleUrls: ['./trip-search.component.css']
})
export class TripSearchComponent implements OnInit {

  trips$: Observable<Trip[]>;
  private searchTerms = new Subject<string>();

  constructor( private tripService: TripService) { }

  // Push seacrh in observable stream
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
  this.trips$ = this.searchTerms.pipe(

    // wait some time before considering searchterm
    debounceTime(300),

    // ignore new term if same
    distinctUntilChanged(),

    // switch to new search if changed
    switchMap((term: string) => this.tripService.searchTrip(term)),
  );
  }

}
