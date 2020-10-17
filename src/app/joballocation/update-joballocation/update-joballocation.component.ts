import { EmployeeService } from './../../employee/employee.service';
import { DepartmentService } from './../../department/department.service';
import { Observable } from 'rxjs';
import { JoballocationService } from './../joballocation.service';
import { Component, OnInit } from '@angular/core';
import { Joballocation } from '../joballocation';
import { ActivatedRoute, Router } from '@angular/router';
import { Department } from 'src/app/department/department';
import { Employee } from 'src/app/employee/employee';

@Component({
  selector: 'app-update-joballocation',
  templateUrl: './update-joballocation.component.html',
  styleUrls: ['./update-joballocation.component.css']
})
export class UpdateJoballocationComponent implements OnInit {

  id: number;
  joballocation: Joballocation;

  departments: Observable<Department[]>
  employees: Observable<Employee[]>

  constructor(private route: ActivatedRoute, private router: Router, private joballocationService: JoballocationService, private departmentService: DepartmentService, private employeeService: EmployeeService) { }

  ngOnInit() {
    this.departments = this.departmentService.getDepartmentList();
    this.employees = this.employeeService.getEmployeeList();

    this.joballocation = new Joballocation();
    this.id = this.route.snapshot.params['id'];
    
    this.joballocationService.getJoballocation(this.id)
      .subscribe(data => {
        console.log(data)
        this.joballocation = data;
      }, error => console.log(error));
  }

  updateJoballocation() {
    this.joballocationService.updateJoballocation(this.id, this.joballocation)
      .subscribe(data => console.log(data), error => console.log(error));
    this.joballocation = new Joballocation();
    this.gotoList();
  }

  onSubmit() {
    this.updateJoballocation();    
  }

  gotoList() {
    this.router.navigate(['/joblist']);
  }

}
