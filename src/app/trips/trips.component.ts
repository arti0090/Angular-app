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

  onSelect(trip: Trip): Trip {
    this.selectedTrip = trip;
    return this.selectedTrip;
  }

  getTrips(): void {
    this.tripService.getTrips().subscribe(
    trips => this.trips = trips);
  }

}
