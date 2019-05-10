import { Component, OnInit } from '@angular/core';
import { EventsService } from 'src/app/services/events.service';
import { IEvent } from 'src/app/models/event.model';
import { FormControl } from '@angular/forms';
import { Observable, of } from 'rxjs';
import {map, startWith, debounceTime, switchMap} from 'rxjs/operators';
import { PageEvent } from '@angular/material';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  displayedColumns: string[] = ['ID', 'User', 'Event', 'Timestamp'];
  dataSource : IEvent[];

  eventsCtrl = new FormControl();
  filteredEvents: Observable<IEvent[]>;
  events: IEvent[] = [];

  pageEvent: PageEvent;

  constructor(private eventsService : EventsService) { 
    this.filteredEvents = this.eventsCtrl.valueChanges
      .pipe(
        debounceTime(500),
        startWith(''),
        switchMap(event => { 
          return this._filterEvents(event || '')
        })
      );
  }

  ngOnInit() {
    this.eventsService.getEvents().subscribe((data) => {
      if (data.data) {
        this.dataSource = data.data.sort((a , b) => (a.event.toLowerCase() < b.event.toLowerCase()) ? -1 : 1);  
      }  
    });
  }

  private _filterEvents(value: string) : Observable<IEvent[]>{
    if (value && value.length >= 2) {
      const filterValue = value.toLowerCase();
      return this.eventsService.getEventByName(filterValue).pipe(
          map(data => data.data.filter(event => {
            return event;
          }))
      );
    } else {
      return of <IEvent[]>([]);
    }
  }

  public paginate(event: PageEvent) {
    console.log(event);
  }

}
