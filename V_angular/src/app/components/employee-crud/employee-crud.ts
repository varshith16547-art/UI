import { Component } from '@angular/core';
import { EmployeeTable } from '../employee-table/employee-table';
import { EmployeeAdd } from '../employee-add/employee-add';

@Component({
  selector: 'app-employee-crud',
  standalone: true,
  imports: [EmployeeTable, EmployeeAdd],
  templateUrl: './employee-crud.html',
  styleUrl: './employee-crud.css'
})
export class EmployeeCrud {
  employees = [
    { eId: 101, name: 'Sanjay', sal: 50000, role: 'Manager' },
    { eId: 102, name: 'Geeta', sal: 60000, role: 'Tester' },
    { eId: 103, name: 'Sameer', sal: 55000, role: 'Developer' },
  ];


  addEmployee(newEmp: any) {
    this.employees.push(newEmp);
  }

  
  deleteEmployee(id: number) {
    this.employees = this.employees.filter(e => e.eId !== id);
  }
}
