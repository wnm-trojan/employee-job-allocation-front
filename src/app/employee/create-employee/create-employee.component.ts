import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { EmployeeService } from './../employee.service';
import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  //res: String;
  //employees: Observable<Employee[]>

  employee: Employee = new Employee();
  submitted = false;

  constructor(private employeeService: EmployeeService, private router: Router) { }

  ngOnInit() {
  }

  newEmployee(): void {
    this.submitted = false;
    this.employee = new Employee;
  }

  save() {
    this.employeeService.createEmployee(this.employee)
      .subscribe(data => console.log(data), error => console.log(error));
    this.employee = new Employee();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['/employees']);
  }

  /*
  onChange(newValue) {
    var ar = true;
    this.employees = this.employeeService.getEmployeeList();
    this.employees.forEach(obj => {
      obj.forEach(childObj=> {
        if(childObj.emp_regNo == newValue){
          ar = false;
        }else{
          ar = true;
        }
     })
    });

    if(ar){
      this.res = "Not valid Employee number";
    }else{
      this.res = "Valid Employee number";
    }

  }
  */

}
