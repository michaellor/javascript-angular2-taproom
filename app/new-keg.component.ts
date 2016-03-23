import { Component, EventEmitter } from 'angular2/core';
import { Keg } from './keg.model';

@Component({
  selector: 'new-keg',
  outputs: ['onSubmitNewKeg'],
  template: `
    <div class="keg-form">
      <h3>Create a new keg</h3>
        <input placeholder="Name" type="text" class="col-sm-8 input-lg" #newName>
        <input placeholder="Brand" type="text" class="col-sm-8 input-lg" #newBrand>
        <input placeholder="Price" type="number" class="col-sm-8 input-lg" #newPrice>
        <input placeholder="Alcohol" class="col-sm-8 input-lg" #newAlcohol>
        <button (click)="addKeg(newName, newBrand, newPrice, newAlcohol)">Add</button>
    </div>
  `
})

export class NewKegComponent {
  public onSubmitNewKeg: EventEmitter<String[]>;
  public newKeg: String[];
  constructor() {
    this.onSubmitNewKeg = new EventEmitter();
  }
  addKeg(userName: HTMLInputElement, userBrand: HTMLInputElement, userPrice: HTMLInputElement, userAlcohol: HTMLInputElement) {
    this.newKeg = [userName.value, userBrand.value, userPrice.value, userAlcohol.value];
    console.log(this.newKeg);
    this.onSubmitNewKeg.emit(this.newKeg);
    userName.value ="";
    userBrand.value ="";
    userPrice.value ="";
    userAlcohol.value ="";
  }
}
