import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'listCommas',
  standalone: true
})
export class ListCommasPipe implements PipeTransform {

  transform(value: string[] | null, listName?: string, keyWord?: string) {

    if (!value) {
      return `${listName} ${keyWord}`;
    }

    switch (value.length) {
      case 0:
        return `${listName} ${keyWord}`;

      case 1:
        return value[0];

      case 2:
        return value.join(' and ');

      default:
        return `${value.slice(0, -1).join(', ')} and ${value[value.length - 1]}`;
    }
  }
}
