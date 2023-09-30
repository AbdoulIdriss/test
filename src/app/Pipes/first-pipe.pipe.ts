import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstPipe'
})
export class FirstPipePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    return null;
  }

}

