import { Injectable } from '@angular/core';
import { Headers, Request, RequestOptions, RequestMethod, Response } from '@angular/http';
import {map, catchError} from 'rxjs/operators'
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient, HttpRequest } from '@angular/common/http';
import {event} from './events.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getEvents(){
    return this.http.get<event[]>(this.getFullUrl('events'));
  }

  getUpcomingEvents(){
    return this.http.get<event[]>(this.getFullUrl('events/upcoming'));
  }


  getFullUrl(url:string) : string
  {
    return `${this.baseUrl}/${url}`;
  }

}