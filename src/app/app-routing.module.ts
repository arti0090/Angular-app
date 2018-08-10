import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { TripsComponent } from './trips/trips.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TripDetailsComponent } from './trip-details/trip-details.component';


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent},
  { path: 'trips', component: TripsComponent},
  { path: 'detail/:id' , component: TripDetailsComponent }
];

@NgModule({

  imports: [ RouterModule.forRoot(routes)],

  exports: [ RouterModule  ]

})




export class AppRoutingModule { }
