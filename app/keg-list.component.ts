import { Component, EventEmitter } from 'angular2/core';
import { KegComponent } from './keg.component';
import { NewKegComponent } from './new-keg.component';
import { Keg } from './keg.model';


@Component({
  selector: 'keg-list',
  inputs: ['kegList'],
  outputs: ['onKegSelect'],
  directives: [KegComponent, NewKegComponent],
  template: `
    <keg-display *ngFor="#currentKeg of kegList"
      (click)="kegClicked(currentKeg)"
      [class.selected]="currentKeg === selectedKeg"
      [keg]="currentKeg">
    </keg-display>
    <new-keg (onSubmitNewKeg)="createKeg($event)"></new-keg>
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
