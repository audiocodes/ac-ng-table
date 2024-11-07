import {Pipe, PipeTransform} from '@angular/core';
import {byString} from '../by-string';

@Pipe({name: 'ByStringPipe'})
export class ByStringPipe implements PipeTransform {
    transform(obj: any, key: string): any {
        return byString(obj, key);
    }
}
