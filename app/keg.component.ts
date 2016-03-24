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
          <p
            [class.pricehigh]="keg.price > 7"
            [class.pricelow]="keg.price <= 7">
            Price: $ {{ keg.price }}</p>
          <p>Alochol Content: {{ keg.alcohol }} %</p>
          <p>Amount of alcohol left: {{ keg.pours }}
      </div>
      <keg-pour *ngIf="keg.pours > 0" [pourKeg]="keg"></keg-pour>
      <button (click)="deleteKeg()" class="btn btn-danger">Delete</button>
    </div>
  `
})
export class KegComponent {
  public keg: Keg;

  deleteKeg(){
    delete this.keg.name;
    delete this.keg.brand;
    delete this.keg.price;
    delete this.keg.alcohol;
    delete this.keg.pours;
    delete this.keg.empty;
    delete this.keg.id;
  }
}
