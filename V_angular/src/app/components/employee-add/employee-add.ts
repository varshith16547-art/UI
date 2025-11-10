import { Component, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employee-add',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './employee-add.html',
  styleUrl: './employee-add.css',
  outputs: ['addEmpEvent']
})
export class EmployeeAdd {
  eId = 0;
  name = '';
  sal = 0;
  role = '';

  addEmpEvent = new EventEmitter<any>();

  addEmployee() {
    if (this.eId && this.name && this.sal && this.role) {
      const newEmp = { eId: this.eId, name: this.name, sal: this.sal, role: this.role };
      this.addEmpEvent.emit(newEmp);

      // Reset fields after adding
      this.eId = 0;
      this.name = '';
      this.sal = 0;
      this.role = '';
    }
  }
}
