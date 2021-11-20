import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Address } from 'src/address';
import { Employee } from 'src/employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css'],
})
export class EmployeeCreateComponent implements OnInit {
  public employee = new Employee();
  public address=new Address();
  constructor(
    private _employeeService: EmployeeService,
    private route: Router
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    this.addEmployee();
  }

  addEmployee() {
    this.employee.address=this.address;
    this._employeeService
      .addEmployee(this.employee)
      .subscribe((response: any) => {
        console.log(response);
        if (response != null) {
          this.gotoEmployeeList();
        } else {
          this.goToAddEmployee();
        }
      });
  }
  gotoEmployeeList() {
    this.route.navigate(['employeeList']);
  }

  goToAddEmployee() {
    this.route.navigate(['addEmployee']);
  }
}
