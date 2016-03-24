import { Component } from 'angular2/core';
import { Keg } from './keg.model';
import { PourComponent } from './pour.component';

@Component({
  selector: 'keg-display',
  inputs: ['keg'],
  directives: [PourComponent],
  template: `
    <div class="container">
      <div
        [class.pink]="keg.pours <= 124"
        [class.green]="keg.pours <=110"
        [class.red]="keg.pours === 0">
          <h3>Name: {{ keg.name }}</h3>
          <h4>Brand: {{ keg.brand }}</h4>
          <p>Price: $ {{ keg.price }}</p>
          <p>Alochol Content: {{ keg.alcohol }} %</p>
          <p>Amount of alcohol left: {{ keg.pours }}
      </div>
      <keg-pour *ngIf="keg.pours > 0" [pourKeg]="keg"></keg-pour>

    </div>
  `
})
export class KegComponent {
  public keg: Keg;
}
