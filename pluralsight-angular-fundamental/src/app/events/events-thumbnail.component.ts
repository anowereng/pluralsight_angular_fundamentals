import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'event-thumbnail',
    template: `<div class="card" style="width: 18rem;">
  <div class="card">
    <div class="card-header">
        Featured
    </div>
  <div class="card-body">
    <h5 class="card-title">{{event.name}}</h5>
    <p class="card-text">{{event.desctiption}} </p>
    <a href="#" class="btn btn-primary" (click)="handleClickEvent()">Go somewhere</a>
    
  </div>
    <div class="card-footer">
        <a href="#" >Back To</a>
    </div>
</div>`
})
export class EventsThumnailComponent {
    @Input() event: any;
    @Output() eventClick = new EventEmitter();
    
    handleClickEvent() {
        this.eventClick.emit('foo');
    }   
    
}
