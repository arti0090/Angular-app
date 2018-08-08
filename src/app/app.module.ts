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

@NgModule({
  declarations: [
    AppComponent,
    TripsComponent,
    TripEditorComponent,
    MessagesComponent,
    DashboardComponent,
    TripDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
