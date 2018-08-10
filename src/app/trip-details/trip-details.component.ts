import { Component, OnInit, Output, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { TripService } from '../trip.service';
import { Trip } from '../trip';


@Component({
  selector: 'app-trip-details',
  templateUrl: './trip-details.component.html',
  styleUrls: ['./trip-details.component.css']
})
export class TripDetailsComponent implements OnInit {




  trip: Trip;

  @Input()
  selectedTrip: Trip;


  constructor(
    private route: ActivatedRoute,
    private tripService: TripService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getTrip();
  }

  getTrip(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.tripService.getTrip(id).subscribe(trip => this.trip = trip);
  }

  save(): void {
    this.tripService.updateTrip(this.trip)
    .subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }
}
