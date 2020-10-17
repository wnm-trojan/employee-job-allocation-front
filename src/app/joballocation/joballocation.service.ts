import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JoballocationService {

  private baseUrl = 'http://localhost:8081/joballocations';

  constructor(private http: HttpClient) { }

  getJoballocationList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  getJoballocation(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createJoballocation(joballocation: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, joballocation);
  }

  updateJoballocation(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteJoballocation(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  

}
