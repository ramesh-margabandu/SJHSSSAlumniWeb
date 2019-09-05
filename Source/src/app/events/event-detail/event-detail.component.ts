import { Component, OnInit } from '@angular/core';
import { event } from 'src/app/shared/events.model';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {

  selectedEvent: event;
  constructor() { }

  ngOnInit() {
  }

}
