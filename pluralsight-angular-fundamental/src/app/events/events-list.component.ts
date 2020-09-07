import { Component } from '@angular/core';

@Component({
  selector: 'event-list',
  templateUrl: '../events/events-list.component.html',
  styles: [`
    .top-md{
      margin-top:5px;
      max-width:200;
      max-height:100;
    }
  `]
})
export class EventsListComponent {
  events: any = [
    {
    id: 123,
    name: 'First venet',
    date: '01-04-1990',
    desctiption:'Some quick example text to build on the card title and make up the bulk of the card\'s content.'
    },
    {
      id: 456,
      name: 'third venet',
      date: '01-04-1990',
      desctiption:'Some quick example text to build on the card title and make up the bulk of the card\'s content.'
    },
    {
      id: 789,
      name: 'der venet',
      date: '01-04-1990',
      desctiption:'Some quick example text to build on the card title and make up the bulk of the card\'s content.'
    },
    {
      id: 996,
      name: 'happen venet',
      date: '01-04-1990',
      desctiption:'Some quick example text to build on the card title and make up the bulk of the card\'s content.'
    },
    {
      id: 741,
      name: 'Last venet',
      date: '01-04-1990',
      desctiption:'Some quick example text to build on the card title and make up the bulk of the card\'s content.'
    }
  
  ]
  handleEventClick(data) {
    console.log(data);
  }
}
