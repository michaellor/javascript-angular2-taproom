import { Component, EventEmitter } from 'angular2/core';
import { Keg } from './keg.model';

@Component ({
  selector: 'keg-pour',
  inputs: ['pourKeg'],
  template: `
    <button (click)="pourADrink()">Pour a Pint!</button>
  `
})

export class PourComponent {
  public pourKeg: Keg;
  pourADrink() {
    this.pourKeg.pours--; //this.pourKeg.pours = this.pourKeg.pours - 1;
    console.log(this.pourKeg.pours);
  }
}
