import { WorklogService } from './../worklog.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Worklog } from '../worklog';

@Component({
  selector: 'app-worklog-list',
  templateUrl: './worklog-list.component.html',
  styleUrls: ['./worklog-list.component.css']
})
export class WorklogListComponent implements OnInit {

  worklogs: Observable<Worklog[]>

  constructor(private router: Router, private worklogService: WorklogService) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.worklogs = this.worklogService.getWorklogList();
  }

  worklogDetails(id: number){
    this.router.navigate(['worklogdetails', id]);
  }

}
