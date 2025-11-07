import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'salution'
})
export class SalutionPipe implements PipeTransform {

  transform(name:string, gender:string)
   { 
    if(gender.toLowerCase()==='male') return'Mr. '+name;
    else return 'Mrs. '+name;
    
  }


}
