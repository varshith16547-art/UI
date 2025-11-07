import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEye, faTrash } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-crud',
  standalone: true,
  imports: [CommonModule, FormsModule, FontAwesomeModule],
  templateUrl: './crud.html'
})
export class Crud {
  faEye = faEye;
  faTrash = faTrash;

  employees2 = [
    { eId: 101, name: 'sanjay', sal: 50000, gender: 'male', role: 'Manager', status: 'Active' },
    { eId: 104, name: 'geeta', sal: 8000, gender: 'female', role: 'Tester', status: 'Inactive' },
    { eId: 103, name: 'sameer', sal: 7000, gender: 'male', role: 'Developer', status: 'Inactive' },
    { eId: 102, name: 'sita', sal: 90000, gender: 'female', role: 'Manager', status: 'Active' },
    { eId: 105, name: 'deepak', sal: 80000, gender: 'male', role: 'Developer', status: 'Active' }
  ];

  selectedEmp: any = null;
  newEmp = { eId: '', name: '', sal: '', gender: '', role: '', status: '' };

  addEmp() {
    const empToAdd = {
      ...this.newEmp,
      eId: Number(this.newEmp.eId),
      sal: Number(this.newEmp.sal)
    };

    if (!empToAdd.name || !empToAdd.sal) {
      Swal.fire('Missing Fields', 'Please fill all details before adding!', 'warning');
      return;
    }

    this.employees2.push(empToAdd);
    Swal.fire('Success', 'Employee Added Successfully!', 'success');
    this.newEmp = { eId: '', name: '', sal: '', gender: '', role: '', status: '' };
  }

  deleteEmp(id: number) {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You want to delete this employee?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete!',
      cancelButtonText: 'Cancel'
    }).then((result) => {
      if (result.isConfirmed) {
        this.employees2 = this.employees2.filter(emp => emp.eId !== id);
        Swal.fire('Deleted!', 'Employee deleted successfully.', 'success');
      }
    });
  }

  viewEmp(emp: any) {
    this.selectedEmp = emp;
  }
}
