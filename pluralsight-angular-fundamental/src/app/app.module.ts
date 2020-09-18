import { LoginComponent } from './user/login/login.component';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EventsAppComponent } from './events-app.component';
import { NavbarComponent } from './nav/navbar.component';
import { EventService } from './shared/event.service';
import { EventRouteActivator } from './shared/event-route-activator.component';
import { ToastrService } from './common/toaste.service';
import {RouterModule} from '@angular/router'
import { apprRoutes } from './routes'
import {AuthService} from './user/auth.service'
import {
  EventsListComponent,
  EventsThumnailComponent,
  EventsDetailsComponent,
  EventsNewComponent,
} from './events/index'
import { Error404Component } from './errors/404.component';
import{FormsModule} from '@angular/forms'
@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventsThumnailComponent,
    NavbarComponent,
    EventsDetailsComponent,
    EventsNewComponent,
    Error404Component,
    HomeComponent,
    UserComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(apprRoutes)
  ],
  providers: [EventService, ToastrService, EventRouteActivator, AuthService],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
