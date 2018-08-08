import { Component, OnInit, Output, Input } from '@angular/core';
import { Trip } from '../trip';


@Component({
  selector: 'app-trip-details',
  templateUrl: './trip-details.component.html',
  styleUrls: ['./trip-details.component.css']
})
export class TripDetailsComponent implements OnInit {


  

  trips: Trip[];

  @Input()
  selectedTrip: Trip;
  

  constructor() { }

  ngOnInit() {

  }
 
}
