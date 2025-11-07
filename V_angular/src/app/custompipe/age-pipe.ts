import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {


  transform(bday:string) {
    if(!bday)
      return '';
    const obj= new Date(bday);
    const today = new Date();
  let age = today.getFullYear() - obj.getFullYear();
  const mdiff = today.getMonth() - obj.getMonth();
  const ddiff = today.getDate()-obj.getDate();
  if(mdiff<0||(mdiff===0 && ddiff<0)) age--;
  return age
      
  }
}
