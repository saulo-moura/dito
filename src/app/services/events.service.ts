import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IEvent, IEventPaginate } from '../models/event.model';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  
  constructor(private http: HttpClient) { }

  urlAPI = environment.urlAPI;

  getEventByName(eventName : string) {
    return this.http.get<IEventPaginate>(`${this.urlAPI}/events/${eventName}`);
  }

  getEvents() {
    return this.http.get<IEventPaginate>(`${this.urlAPI}/events`);
  }
}
