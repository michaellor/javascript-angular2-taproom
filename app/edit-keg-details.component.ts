import { Component } from 'angular2/core';
import { Keg } from './keg.model';

@Component ({
  selector: 'edit-keg-details',
  inputs: ['keg'],
  template: `
    <div class="edit-form row">
      <h3>Edit Keg: </h3>
        <input [(ngModel)]="keg.name" class="col-sm-8 input-lg"/>
        <input [(ngModel)]="keg.brand" class="col-sm-8 input-lg"/>
        <input [(ngModel)]="keg.price" type="number" class="col-sm-8 input-lg"/>
        <input [(ngModel)]="keg.alcohol" type="number" class="col-sm-8 input-lg"/>
    </div>
  `
})

export class EditKegDetailsComponent {
  public keg: Keg;
}
