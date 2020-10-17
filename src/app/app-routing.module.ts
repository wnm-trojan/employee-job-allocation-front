import { WorklogDetailsComponent } from './worklog/worklog-details/worklog-details.component';
import { WorklogListComponent } from './worklog/worklog-list/worklog-list.component';
import { JoballocationDetailsComponent } from './joballocation/joballocation-details/joballocation-details.component';
import { UpdateJoballocationComponent } from './joballocation/update-joballocation/update-joballocation.component';
import { CreateJoballocationComponent } from './joballocation/create-joballocation/create-joballocation.component';
import { JoballocationListComponent } from './joballocation/joballocation-list/joballocation-list.component';
import { UpdateEmployeeComponent } from './employee/update-employee/update-employee.component';
import { CreateEmployeeComponent } from './employee/create-employee/create-employee.component';
import { EmployeeDetailsComponent } from './employee/employee-details/employee-details.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { UpdateDepartmentComponent } from './department/update-department/update-department.component';
import { CreateDepartmentComponent } from './department/create-department/create-department.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentListComponent } from './department/department-list/department-list.component';
import { from } from 'rxjs';
import { DepartmentDetailsComponent } from './department/department-details/department-details.component';

 
const routes: Routes = [
  { path: 'departments', component: DepartmentListComponent },
  { path: 'departmentadd', component: CreateDepartmentComponent },
  { path: 'depdetails/:id', component: DepartmentDetailsComponent },
  { path: 'depupdate/:id', component: UpdateDepartmentComponent },
  { path: 'employees', component: EmployeeListComponent },
  { path: 'employeeadd', component: CreateEmployeeComponent},
  { path: 'empdetails/:id', component: EmployeeDetailsComponent },
  { path: 'empupdate/:id', component: UpdateEmployeeComponent },
  { path: 'joblist', component: JoballocationListComponent},
  { path: 'joballocate', component: CreateJoballocationComponent},
  { path: 'jobupdate/:id', component: UpdateJoballocationComponent},
  { path: 'jobdetails/:id', component: JoballocationDetailsComponent},
  { path: 'worklog', component: WorklogListComponent},
  { path: 'worklogdetails/:id', component: WorklogDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
