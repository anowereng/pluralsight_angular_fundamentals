import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'event-thumbnail',
    template: `<div class="card" style="width: 18rem;">
  <div class="card">
    <div class="card-header">
        Featured
    </div>
  <div class="card-body">
    <h5 class="card-title">id: {{event?.id}}</h5>
    <p class="card-text">date : {{event.date}} </p>

      <div [ngSwitch]="event?.time" [class.green]="event?.time==='8:00 AM'">
        <div *ngSwitchCase="'8:00 AM'">Early Start</div>
        <div *ngSwitchCase="'12:00 AM'">Late Start</div>
        <div *ngSwitchDefault>Normal Start</div>
    </div>

    <p class="card-text">Description: {{event?.desctiption}} </div>
    <p class="card-text"[hidden] = "!event?.location">Location :  {{event?.location?.locaddress}} </p>
    <p *ngIf="!event?.location.address" class="card-text">{{event?.location?.address}}</p>
    <a href="#" class="btn btn-primary" (click)="handleClickEvent()">Go somewhere</a>
    
  </div>
    <div class="card-footer">
        <a href="#" (click)="clickBackToList()">Back To</a>
    </div>
</div>`,
  styles: [`
      .green{color: green! important;}
    `]
    
})
export class EventsThumnailComponent {
    @Input() event: any;
    @Output() eventClick = new EventEmitter();
    
    handleClickEvent() {
        this.eventClick.emit('foo');
    }   
    public clickBackToList() {
        console.log('back to list click !!');
    }
    welcomemessage: string="Hello anwoer"
    
}
