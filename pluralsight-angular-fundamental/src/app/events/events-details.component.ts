import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/event.service';
import { ToastrService } from '../common/toaste.service';

@Component({
  selector: 'event-details',
  templateUrl: '../events/events-details.component.html',
  styles: [`
    .top-md{
      margin-top:5px;
      max-width:200;
      max-height:100;
    }
  `]
})
export class EventsDetailsComponent implements OnInit {
  events: any = {};

  constructor(private eventservice: EventService, private toastservice: ToastrService) {
   }
  ngOnInit(): void {
    this.events =  this.eventservice.getEventDataById(123);
  }
  handleEventClick(data) {
    this.toastservice.Info(data);
  }
}
