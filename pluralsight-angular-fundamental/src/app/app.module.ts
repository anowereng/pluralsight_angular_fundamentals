import { HomeComponent } from './home/home.component';
import { Error404Component } from './errors/404.component';
import { EventsNewComponent } from './events/event-new.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EventsAppComponent } from './events-app.component';
import { EventsListComponent } from './events/events-list.component';
import { EventsThumnailComponent } from './events/events-thumbnail.component';
import { EventsDetailsComponent } from './events/events-details.component';
import { NavbarComponent } from './nav/navbar.component';
import { EventService } from './shared/event.service';
import { EventRouteActivator } from './shared/event-route-activator.component';
import { ToastrService } from './common/toaste.service';
import {RouterModule} from '@angular/router'
import { apprRoutes } from './routes'

@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventsThumnailComponent,
    NavbarComponent,
    EventsDetailsComponent,
    EventsNewComponent,
    Error404Component,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(apprRoutes)
  ],
  providers: [EventService, ToastrService, EventRouteActivator],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
