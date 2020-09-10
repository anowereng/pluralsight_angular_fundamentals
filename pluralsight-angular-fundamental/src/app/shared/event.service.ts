
import { Injectable } from '@angular/core';
@Injectable()
export class EventService {
    getEventData() {
        return EVENTS;
    }

  getEventDataById(id:number){
    return EVENTS.find(event => event.id === id);
  }
   
}
const EVENTS = [
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
