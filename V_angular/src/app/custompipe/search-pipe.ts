import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(employees2: any[], text:string) {
    if(!employees2) return [];
    if(!text) return employees2;
    text=text.toLowerCase();
    return employees2.filter(emp =>
      emp.name.toLowerCase().includes(text) ||
      emp.gender===(text) ||
      emp.eId.toString().includes(text) ||
      emp.sal.toString().includes(text) 
      
    );
  }

}
