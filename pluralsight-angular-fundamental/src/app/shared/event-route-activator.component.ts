import { ActivatedRoute, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { EventService } from './event.service';

@Injectable()
export class EventRouteActivator implements CanActivate {
    constructor(private router: Router, private eventservice: EventService) { }

    canActivate(route: ActivatedRouteSnapshot) {
        const eventexist = !!this.eventservice.getEventDataById(+route.params['id']);
        if (!eventexist)
            this.router.navigate(['/404'])
            return eventexist
    }
}