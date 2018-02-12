import {Pipe} from '@angular/core';
import { format } from 'util';

@Pipe({
    name: 'phone2'
})
export class PhonePipe2{
    transform(value: String, args?: string): any {
        if (!value) {
          return value;
        }
        return value.replace(/(\d\d\d)(\d\d\d)(\d\d\d\d)/, '+91 $1$2$3');
      }
}