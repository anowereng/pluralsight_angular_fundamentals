import { Component } from '@angular/core';

@Component({
  selector: 'event-list',
  templateUrl: '../events/events-list.component.html'
})
export class EventsListComponent {
  event = {
    id: 123,
    name: 'First venet',
    date: '01-04-1990'
  }
}
