import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-employee-table',
  standalone: true,
  templateUrl: './employee-table.html',
  styleUrl: './employee-table.css',
  inputs: ['empList'],
  outputs: ['deleteEmpEvent']
})
export class EmployeeTable {
  empList: any[] = [];
  deleteEmpEvent = new EventEmitter<number>();
  sendDelete(id: number) {
    this.deleteEmpEvent.emit(id);
  }
}
