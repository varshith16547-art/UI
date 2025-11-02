import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css',
})
export class DataBinding {
myname: string ='Virat kohli';
img_url='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu4onUY6fXpVk1fdfLFBV4A7VLqUJoopGLzFdj449yb9TvIAYeOsJD06lPTfv4pu2zef5owDnr3DVn9yP4euVaLqxMjYHMdebd-BMZsU5-nw&s=10';
flag: boolean =true;
msg:string ='';
thestate: string ='';
toggleflag() {
  this.flag=!this.flag;
}
num1: number=10;
num2: number=20;
op:string='';
calculate:string='';
result:number | string='';
flags=true;
ct:number=0;
celcius:number=0;
farenheit:number=0;


calculation(){
  switch(this.op) {
    case '+': this.result= this.num1 + this.num2; break;
    case '-':  this.result=this.num1 - this.num2; break;
    case '*':  this.result=this.num1 * this.num2; break;
    case '/':  this.result=this.num1/ this.num2; break;
    //default: return 'not valid input'
  }
}

theme(){
  this.flag=!this.flag;
  if(this.flag)
    document.body.style.backgroundColor='black';
  else
    document.body.style.backgroundColor= 'white';
}


fun(){
  this.farenheit=(this.celcius * 9/5) + 32;
}
}

