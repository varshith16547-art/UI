import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OrdinalPipe } from '../../custompipe/ordinal-pipe';
import { RomanPipe } from '../../custompipe/roman-pipe';
import { AgePipe } from '../../custompipe/age-pipe';
import { SalutionPipe } from '../../custompipe/salution-pipe';
import { SearchPipe } from '../../custompipe/search-pipe';


@Component({
  selector: 'app-pipes',
  imports: [CommonModule, FormsModule,OrdinalPipe,RomanPipe,AgePipe,SalutionPipe, SearchPipe],
  templateUrl: './pipes.html',
  styleUrl: './pipes.css',
})
export class Pipes {
 myName: string = 'saChin tEnDULkAr';
  salary: number = 5000;
  dateObj = new Date();

  user = { name: 'sanjay', add: 'bangalore', age: 55 };
  numArr = [10, 20, 30, 40, 50, 60, 70];
  num: number = 21;
  nums: number = 20;
  age : string = '2020-06-04';

employees = [
  { id: 101, name: 'Sanjay', gender: 'male', salary: 50000 },
  { id: 102, name: 'Geeta', gender: 'female', salary: 60000 },
  { id: 103, name: 'Sameer', gender: 'male', salary: 55000 }
];

text='';

employees2 = [
    { "eId": 101, "name": "sanjay", "sal": 5000, "gender":"male" },
    { "eId": 104, "name": "geeta", "sal": 8000, "gender":"female" },
    { "eId": 103, "name": "sameer", "sal": 7000, "gender":"male" },
    { "eId": 102, "name": "sita", "sal": 9000, "gender":"female" },
    { "eId": 105, "name": "deepak", "sal": 8000, "gender":"male" }
  ];

}






