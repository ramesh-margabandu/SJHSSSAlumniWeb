import { Component, OnInit } from '@angular/core';
import { event } from 'src/app/shared/events.model';
import { ApiService } from 'src/app/shared/api.service';

@Component({
  templateUrl: './event-list.component.html'
})
export class EventListComponent implements OnInit {

  events: event[];
  constructor(private api:ApiService) { }

  ngOnInit() {
    this.api.getEvents()
      .subscribe(data => 
        {
          console.log(data);
          this.events = data;
        });
  }

}
