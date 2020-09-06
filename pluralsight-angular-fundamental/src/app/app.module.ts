import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EventsAppComponent } from './events-app.component';
import { EventsListComponent } from './events/events-list.component';
import { EventsThumnailComponent } from './events/events-thumbnail.component';
import { NavbarComponent } from './nav/navbar.component';

@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventsThumnailComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
