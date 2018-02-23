import {Pipe,} from '@angular/core';
import { format } from 'util';

@Pipe({
    name: 'phone'   
})
export class PhonePipe{
    transform(value: String, args?: string): any {
        if (!value) {
          return value;
        }
        return value.replace(/(\d\d\d)(\d\d\d)(\d\d\d\d)/, '($1) $2-$3');
      }
}

@Pipe({
    name: 'phone2' 
})
export class PhonePipe2{
    transform(value: String,ccode:string, args?: string): any {
        if (!value) {
          return value;
        }
        return value.replace(/(\d\d\d)(\d\d\d)(\d\d\d\d)/, ccode+'$1$2$3');
      }
}
