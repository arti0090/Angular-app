import { Injectable } from '@angular/core';
import { Trip } from './trip';
import { TRIPS } from './mock-trips';
import { Observable, of} from 'rxjs';
import { MessageService } from './message.service';


@Injectable({
  providedIn: 'root'
})
export class TripService {

  constructor(private messageService: MessageService) { }


  getTrips() : Observable<Trip[]> {

    //send message after fetching trips

    this.messageService.add('TripService: fetched trips');
    

    return of (TRIPS);
  }
  


}
