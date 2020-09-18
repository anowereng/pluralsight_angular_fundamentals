import { LoginComponent } from './user/login/login.component';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import {  Routes} from '@angular/router'
import { Error404Component } from './errors/404.component';
import { EventRouteActivator } from './shared/event-route-activator.component';
import {EventsDetailsComponent,
        EventsListComponent,
        EventsNewComponent, 
        EventsThumnailComponent} from './events/index'

export const apprRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'events/new', component: EventsNewComponent },
    { path: 'events', component: EventsListComponent },
    { path: '404', component: Error404Component },
    { path: 'user/info', component: UserComponent },
    { path: 'user/login', component: LoginComponent },
    { path: 'events/:id', component: EventsDetailsComponent , canActivate:[EventRouteActivator]},
    { path: '', redirectTo:'/home', pathMatch:'full' }
]