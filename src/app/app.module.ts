import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateDepartmentComponent } from './department/create-department/create-department.component';
import { DepartmentListComponent } from './department/department-list/department-list.component';
import { DepartmentDetailsComponent } from './department/department-details/department-details.component';
import { UpdateDepartmentComponent } from './department/update-department/update-department.component';
import { CreateEmployeeComponent } from './employee/create-employee/create-employee.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './employee/employee-details/employee-details.component';
import { UpdateEmployeeComponent } from './employee/update-employee/update-employee.component';
import { CreateJoballocationComponent } from './joballocation/create-joballocation/create-joballocation.component';
import { JoballocationListComponent } from './joballocation/joballocation-list/joballocation-list.component';
import { JoballocationDetailsComponent } from './joballocation/joballocation-details/joballocation-details.component';
import { UpdateJoballocationComponent } from './joballocation/update-joballocation/update-joballocation.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { WorklogListComponent } from './worklog/worklog-list/worklog-list.component';
import { WorklogDetailsComponent } from './worklog/worklog-details/worklog-details.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateDepartmentComponent,
    DepartmentListComponent,
    DepartmentDetailsComponent,
    UpdateDepartmentComponent,
    CreateEmployeeComponent,
    EmployeeListComponent,
    EmployeeDetailsComponent,
    UpdateEmployeeComponent,
    CreateJoballocationComponent,
    JoballocationListComponent,
    JoballocationDetailsComponent,
    UpdateJoballocationComponent,
    WorklogListComponent,
    WorklogDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
