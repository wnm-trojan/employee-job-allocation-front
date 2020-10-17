
import { JoballocationService } from './../joballocation.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Joballocation } from '../joballocation';

@Component({
  selector: 'app-joballocation-list',
  templateUrl: './joballocation-list.component.html',
  styleUrls: ['./joballocation-list.component.css']
})
export class JoballocationListComponent implements OnInit {

  joballoactions: Observable<Joballocation[]>

  constructor(private router: Router, private joballocationService: JoballocationService) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.joballoactions = this.joballocationService.getJoballocationList();
  }

  deleteJoballocation(id: number) {
    this.joballocationService.deleteJoballocation(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  joballocationDetails(id: number){
    this.router.navigate(['jobdetailsa', id]);
  }

  updateJoballocation(id: number){
    this.router.navigate(['jobupdate', id]);
  }

}
