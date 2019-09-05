import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/api.service';
import { event } from '../shared/events.model';


@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  upcomingEvents: event[];
  constructor(private api:ApiService) { }

  ngOnInit() {
    this.api.getUpcomingEvents()
      .subscribe(data => 
        {
          console.log(data);
          this.upcomingEvents = data;
        });
  }

}
