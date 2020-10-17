import { EmployeeService } from './../../employee/employee.service';
import { DepartmentService } from './../../department/department.service';
import { JoballocationService } from './../joballocation.service';
import { Router } from '@angular/router';
import { Joballocation } from './../joballocation';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Department } from './../../department/department';
import { Employee } from './../../employee/employee';

@Component({
  selector: 'app-create-joballocation',
  templateUrl: './create-joballocation.component.html',
  styleUrls: ['./create-joballocation.component.css']
})
export class CreateJoballocationComponent implements OnInit {

  joballocation: Joballocation = new Joballocation();
  submitted = false;
  
  departments: Observable<Department[]>
  employees: Observable<Employee[]>

  constructor(private router: Router, private joballocationService: JoballocationService, private departmentService: DepartmentService, private employeeService: EmployeeService) { }

  ngOnInit() {
    this.departments = this.departmentService.getDepartmentList();
    this.employees = this.employeeService.getEmployeeList();
  }

  newJoballocation(): void {
    this.submitted = false;
    this.joballocation = new Joballocation();
  }

  save() {
    this.joballocationService.createJoballocation(this.joballocation)
      .subscribe(data => console.log(data), error => console.log(error));
    this.joballocation = new Joballocation();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['/joblist']);
  }

}
