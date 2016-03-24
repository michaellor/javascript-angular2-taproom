import { Component } from 'angular2/core';
import { Keg } from './keg.model';
import { PourComponent } from './pour.component';

@Component({
  selector: 'keg-display',
  inputs: ['keg'],
  directives: [PourComponent],
  template: `
    <div>
      <label>{{ keg.name }}, {{ keg.brand }}, {{ keg.price }}, {{ keg.alcohol }}</label>
      <keg-pour *ngIf="keg.pours > 0" [pourKeg]="keg"></keg-pour>
    </div>
  `
})
export class KegComponent {
  public keg: Keg;
}
