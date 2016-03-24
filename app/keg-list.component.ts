import { Component, EventEmitter } from 'angular2/core';
import { KegComponent } from './keg.component';
import { NewKegComponent } from './new-keg.component';
import { Keg } from './keg.model';
import { EditKegDetailsComponent } from './edit-keg-details.component';

@Component({
  selector: 'keg-list',
  inputs: ['kegList'],
  outputs: ['onKegSelect'],
  directives: [KegComponent, NewKegComponent, EditKegDetailsComponent],
  template: `
    <keg-display *ngFor="#currentKeg of kegList"
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
      new Keg(kegArray[0], kegArray[1], Number(kegArray[2]), kegArray[3], this.kegList.length)
    );
  }
}
