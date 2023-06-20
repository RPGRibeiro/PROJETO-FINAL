import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'category'
})
export class CategoryPipe implements PipeTransform {

  transform(value: string): string  {
    switch(value){
      case 'Freelancer': return 'store'; /// PARA ALTERAR OS ICONES QUE APARECEM.
      case 'Privado': return 'event';
    }
    return 'event';
  }

}
