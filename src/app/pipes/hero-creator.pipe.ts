import { Pipe, PipeTransform } from '@angular/core';
import { Creator } from '../interfaces/her.interface';

@Pipe({
  name: 'heroCreator',
})
export class heroCreatorPipe implements PipeTransform {
  transform(value: Creator): string {
    return value === Creator.DC ? 'DC' : 'Marvel';
  }
}
