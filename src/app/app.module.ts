import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TripsComponent } from './trips/trips.component';
import { TripEditorComponent } from './trip-editor/trip-editor.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TripDetailsComponent } from './trip-details/trip-details.component';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { HttpClientModule } from '../../node_modules/@angular/common/http';
import { TripSearchComponent } from './trip-search/trip-search.component';

@NgModule({
  declarations: [
    AppComponent,
    TripsComponent,
    TripEditorComponent,
    MessagesComponent,
    DashboardComponent,
    TripDetailsComponent,
    TripSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {dataEncapsulation: false} )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
