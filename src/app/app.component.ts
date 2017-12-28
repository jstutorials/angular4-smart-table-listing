import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HttpErrorResponse} from '@angular/common/http';
import { Employee } from '../models/app.employee';

@Component({
  selector: 'app-root',
  template: '<ng2-smart-table class="table" [settings]="settings" [source]="data"></ng2-smart-table>'
})
export class AppComponent {
  title = 'app';
  settings = {
  columns: {
    id: {
      title: 'ID',
      filter: false,
      editable: false,
      addable: false
    },
    employee_name: {
      title: 'Employee Name',
      filter: true
    },
    employee_age: {
      title: 'Age',
      filter: true
    },
    employee_salary: {
      title: 'Salary',
      filter: true
    }
  }
};
  constructor(private http: HttpClient){
  }
  data:any = [];
ngOnInit(): void {

      this.http.get<Employee[]>('http://dummy.restapiexample.com/api/v1/employees').subscribe(
        data => {
          this.data = data;
          console.log(this.data);
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log("Client-side error occured.");
        } else {
          console.log("Server-side error occured.");
        }
      });
    }
}
