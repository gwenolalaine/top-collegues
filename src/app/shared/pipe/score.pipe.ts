import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'score'
})
export class ScorePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(value ==0){
      return `${value}`;
    }else if(value > 0){
      return `<span class="text-success">+ ${value}</span>`;
    }else if(value < 0){
      return `<span class="text-danger">${value}</span>`;
    }
      
  }

}
