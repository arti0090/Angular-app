import { Component, OnInit, Input } from '@angular/core';
import {TripService} from '../trip.service';
import { Trip } from '../trip';

import { Observable, of} from 'rxjs';
import { post } from '../../../node_modules/@types/selenium-webdriver/http';

@Component({
  selector: 'app-trips',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.css']
})
export class TripsComponent implements OnInit {

  trips: Trip[];
  // name: String = "default";
  // age: number = 15;
  selectedTrip: Trip;

  constructor(private tripService: TripService) { }

  ngOnInit() {
    this.getTrips();
  }

  // onSelect(trip: Trip): Trip {
  //   this.selectedTrip = trip;
  //   return this.selectedTrip;
  // }

  getTrips(): void {
    this.tripService.getTrips().subscribe(
    trips => this.trips = trips);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.tripService.addTrip({ name } as Trip)
    .subscribe(trip => {
      this.trips.push(trip);
    });
  }

  delete(trip: Trip): void {
    this.trips = this.trips.filter( h => h !== trip);
    this.tripService.deleteTrip(trip).subscribe();
  }
}
