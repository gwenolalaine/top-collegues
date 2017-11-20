import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pseudo'
})
export class PseudoPipe implements PipeTransform {

  transform(value: any, args?: any): any {
      return value.filter(v=> v.nom.toLowerCase().startsWith(args.toLowerCase()));
 }

}
