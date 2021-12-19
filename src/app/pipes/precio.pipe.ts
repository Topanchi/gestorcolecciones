import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'precio'
})
export class PrecioPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {

    switch (value) {
      case 100:
        return '100 USD';
      case 150: 
        return '150 USD';
      case 200:
        return '200 USD';
      case 250:
        return '250 USD';
      case 50:
        return '50 USD';
      case 15:
        return '15 USD';
      case 35:
        return '35 USD';
      default:
        return 'SIN PRECIO';
    }
  }

}
