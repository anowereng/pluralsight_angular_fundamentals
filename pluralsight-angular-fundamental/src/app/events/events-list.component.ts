import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/event.service';

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
export class EventsListComponent implements OnInit {
  events: any[];

  constructor(private eventservice: EventService) {
   }
  ngOnInit(): void {
    this.events =  this.eventservice.getEventData();
  }
  handleEventClick(data) {
    console.log(data);
  }
}
