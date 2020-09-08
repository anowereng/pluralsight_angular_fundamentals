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
      time: "10:00 AM",
      location: {
        locid: 12,
        locaddress:'CTG'
      },
    desctiption:'Some quick example text to build on the card title and make up the bulk of the card\'s content.'
    },
    {
      id: 456,
      name: 'third venet',
      date: '01-04-1990',
      time: "8:00 AM",
      location: {
        locid: 12,
        locaddress:'Dhaka'
      },
      desctiption:'Some quick example text to build on the card title and make up the bulk of the card\'s content.'
    },
    {
      id: 789,
      name: 'der venet',
      time: "12:00 PM",
      date: '01-04-1990',
      location: {
        locid: 12,
        locaddress:'CTG'
      },
      desctiption:'Some quick example text to build on the card title and make up the bulk of the card\'s content.'
    },
    {
      id: 996,
      name: 'happen venet',
      time: "10:00 AM",
      date: '01-04-1990',
      location: {
        locid: 12,
        locaddress:'Dhaka'
      },
      desctiption:'Some quick example text to build on the card title and make up the bulk of the card\'s content.'
    },
    {
      id: 741,
      name: 'Last venet',
      time: "8:00 AM",
      date: '01-04-1990',
      desctiption:'Some quick example text to build on the card title and make up the bulk of the card\'s content.'
    }
  
  ]
  handleEventClick(data) {
    console.log(data);
  }
}
