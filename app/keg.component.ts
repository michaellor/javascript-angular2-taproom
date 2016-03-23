import { Component } from 'angular2/core';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-display',
  inputs: ['keg'],
  template: `
    <div>
      <label>{{ keg.name }}, {{ keg.brand }}, {{ keg.price }}, {{ keg.alcohol }}</label>
    </div>
  `
})
export class KegComponent {
  public keg: Keg;
}
