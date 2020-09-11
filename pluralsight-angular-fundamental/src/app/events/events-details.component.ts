import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/event.service';
import { ToastrService } from '../common/toaste.service';
import { ActivatedRoute } from '@angular/router';

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
  event: any;

  constructor(private eventservice: EventService, private toastservice: ToastrService, private route : ActivatedRoute) {
   }
  ngOnInit(): void {
    this.event = this.eventservice.getEventDataById(+this.route.snapshot.params['id']);
    console.log(this.event);
  }
  handleEventClick(data) {
    this.toastservice.Info(data);
  }
}
