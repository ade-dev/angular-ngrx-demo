import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'listCommas'
})
export class ListCommasPipe implements PipeTransform {

  transform(value: string[] | null, listName?: string, keyWord?: string): any {

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
        const allButLast = value.slice(0, -1);
        const last = value[value.length - 1];
        return `${allButLast.join(', ')} and ${last}`;
    }
  }
}
