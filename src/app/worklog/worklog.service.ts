import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WorklogService {

  private baseUrl = 'http://localhost:8081/worklogs';

  constructor(private http: HttpClient) { }

  getWorklogList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  getWorklog(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }


}
