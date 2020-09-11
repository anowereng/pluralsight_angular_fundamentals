import { EventsNewComponent } from './events/event-new.component';
import {  Routes} from '@angular/router'
import { EventsListComponent } from './events/events-list.component'
import { EventsDetailsComponent } from './events/events-details.component'
import { Error404Component } from './errors/404.component';
import { EventRouteActivator } from './shared/event-route-activator.component';


export const apprRoutes: Routes = [
    { path: 'eventsnew', component: EventsNewComponent },
    { path: 'events', component: EventsListComponent },
    { path: '404', component: Error404Component },
    { path: 'events/:id', component: EventsDetailsComponent , canActivate:[EventRouteActivator]},
    { path: '', redirectTo:'/events', pathMatch:'full' }
]