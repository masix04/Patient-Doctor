import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppointmentsComponent } from './appointment/appointment.component';
import { FilterHeaderComponent } from './filter-header/filter-header.component';
import { APIURLS } from './utils/APIURLS';

@NgModule({
  declarations: [
    AppComponent,
    AppointmentsComponent,
    FilterHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ APIURLS],
  bootstrap: [AppComponent]
})
export class AppModule { }
