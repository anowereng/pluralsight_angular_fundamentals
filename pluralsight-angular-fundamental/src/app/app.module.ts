import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EventsAppComponent } from './events-app.component';
import { EventsListComponent } from './events/events-list.component';
import { EventsThumnailComponent } from './events/events-thumbnail.component';
import { EventsDetailsComponent } from './events/events-details.component';
import { NavbarComponent } from './nav/navbar.component';
import { EventService } from './shared/event.service';
import { ToastrService } from './common/toaste.service';

@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventsThumnailComponent,
    NavbarComponent,
    EventsDetailsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [EventService, ToastrService],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
