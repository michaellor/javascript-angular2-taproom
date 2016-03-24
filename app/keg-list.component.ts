import { Component, EventEmitter } from 'angular2/core';
import { KegComponent } from './keg.component';
import { NewKegComponent } from './new-keg.component';
import { Keg } from './keg.model';
import { EditKegDetailsComponent } from './edit-keg-details.component';
import { AlcoholPipe } from './alcohol.pipe';

@Component({
  selector: 'keg-list',
  inputs: ['kegList'],
  outputs: ['onKegSelect'],
  pipes: [AlcoholPipe],
  directives: [KegComponent, NewKegComponent, EditKegDetailsComponent],
  template: `
    <select (change)="alcoholChange($event.target.value)" class="filter">
      <option value="">Show All</option>
      <option value="notStrong">Not String</option>
      <option value="strong">Strong</option>
    </select>
    <keg-display *ngFor="#currentKeg of kegList | alcohol:filterAlcohol"
      (click)="kegClicked(currentKeg)"
      [class.selected]="currentKeg === selectedKeg"
      [keg]="currentKeg">
    </keg-display>
    <div class="container"><new-keg (onSubmitNewKeg)="createKeg($event)"></new-keg></div>
    <div class="container"><edit-keg-details *ngIf="selectedKeg" [keg]="selectedKeg"></edit-keg-details></div>
  `
})
export class KegListComponent {
  public kegList: Keg[];
  public onKegSelect: EventEmitter<Keg>;
  public selectedKeg: Keg;
  public filterAlcohol: string = "all";
  constructor() {
    this.onKegSelect = new EventEmitter();
  }
  kegClicked(clickedKeg: Keg): void {
    console.log('child', clickedKeg);
    this.selectedKeg = clickedKeg;
    this.onKegSelect.emit(clickedKeg);
  }
  createKeg(kegArray: string[]): void {
    this.kegList.push(
      new Keg(kegArray[0], kegArray[1], Number(kegArray[2]), Number(kegArray[3]), this.kegList.length)
    );
  }
  alcoholChange(filterOption) {
    this.filterAlcohol = filterOption;
  }
}
