import { Component, Input } from '@angular/core';

@Component({
  selector: 'event-thumbnail',
  template: `<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">{{event.name}}</h5>
    <p class="card-text">{{event.desctiption}} </p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>`
})
export class EventsThumnailComponent {
    @Input() event:any
}
