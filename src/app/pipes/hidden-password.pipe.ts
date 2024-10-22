import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hiddenPassword',
  standalone: true
})
export class HiddenPasswordPipe implements PipeTransform {

  transform(value: string): string {
    return '*'.repeat(value.length);
  }

}
