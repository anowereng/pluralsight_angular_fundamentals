import { Component } from '@angular/core';

@Component({
  selector: 'event-list',
  templateUrl: '../events/events-list.component.html'
})
export class EventsListComponent {
  event1 = {
    id: 123,
    name: 'First venet',
    date: '01-04-1990',
    desctiption:'Some quick example text to build on the card title and make up the bulk of the card\'s content.'
  }
  handleEventClick(data) {
    console.log(data);
  }
}
