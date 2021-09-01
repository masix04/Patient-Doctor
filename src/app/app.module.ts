import { DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppointmentsComponent } from './appointment/appointment.component';
import { DateSlideHeaderComponent } from './date-slide-header/date-slide-header.component';
import { FilterHeaderComponent } from './filter-header/filter-header.component';
import { ListingTabsHeaderComponent } from './listing-tabs-header/listing-tabs-header.component';
import { APIURLS } from './utils/APIURLS';

@NgModule({
  declarations: [
    AppComponent,
    AppointmentsComponent,
    FilterHeaderComponent,
    DateSlideHeaderComponent,
    ListingTabsHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ APIURLS, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
