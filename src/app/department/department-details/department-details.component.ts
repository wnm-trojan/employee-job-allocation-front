import { DepartmentService } from './../department.service';
import { Component, OnInit } from '@angular/core';
import { Department } from '../department';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-department-details',
  templateUrl: './department-details.component.html',
  styleUrls: ['./department-details.component.css']
})
export class DepartmentDetailsComponent implements OnInit {

  id: number;
  department: Department;

  constructor(private route: ActivatedRoute, private router: Router, private departmentService: DepartmentService) { }

  ngOnInit() {
    this.department = new Department();

    this.id = this.route.snapshot.params['id'];
    
    this.departmentService.getDepartment(this.id)
      .subscribe(data => {
        console.log(data)
        this.department = data;
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['departments']);
  }

}
