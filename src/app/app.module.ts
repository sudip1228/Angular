import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeService } from './employee.service';
import {HttpClientModule} from '@angular/common/http';//required to get observable from database

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    EmployeeDetailComponent,
    EmployeeListComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule//registering http
  ],
  providers: [EmployeeService],//register service by giving class name of service inside square box
  bootstrap: [AppComponent]
})
export class AppModule { }
