import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'roman'
})
export class RomanPipe implements PipeTransform {

  transform(v:number) {
    if(!v||v<=0) 
      return '';
    const roman: any = {X: 10, IX: 9, V: 5, IV: 4, I: 1 };
    let result ='';
    for(let key in roman)
    {
      while(v>=roman[key]){
        result+=key;
      v-= roman[key];
      }  
  }
  return result;

}}
