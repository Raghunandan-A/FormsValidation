import {Pipe} from '@angular/core';
import { format } from 'util';

@Pipe({
    name:'telephone'
})

export class telephonePipe  {
    transform(value: String, args?: string): any {
        if (!value) {
          return value;
        }
        return value.replace(/(\d\d\d)(\d\d\d)(\d\d\d\d)/, '($1) $2-$3');
      }
      
}