import { Component, EventEmitter } from 'angular2/core';
import { KegListComponent } from './keg-list.component';
import { Keg } from './keg.model';

// @Component({
//   selector: 'keg-display',
//   inputs: ['keg'],
//   template: `
//     <h3>"hello world"</h3>
//   `
// })
// export class KegComponent {
//   public keg: Keg;
// }

// @Component({
//   selector: 'keg-list',
//   inputs: ['kegList'],
//   outputs: ['onKegSelect'],
//   //directives: [KegComponent],
//   template: `
//     <keg-display *ngFor="#currentKeg of kegList"
//       (click)="kegClicked(currentKeg)"
//       [class.selected]="currentKeg === selectedKeg"
//       [keg]="currentKeg">
//     </keg-display>
//   `
// })
// export class KegListComponent {
//   public kegList: Keg[];
//   public onKegSelect: EventEmitter<Keg>;
//   public selectedKeg: Keg;
//   constructor() {
//     this.onKegSelect = new EventEmitter();
//   }
//   kegClicked(clickedKeg: Keg): void {
//     console.log('child', clickedKeg);
//     this.selectedKeg = clickedKeg;
//     this.onKegSelect.emit(clickedKeg);
//   }
// }

@Component({
  selector: 'my-app',
  //directives: [KegListComponent],
  template: `
    <div class="container">
      <h1>Tap Room</h1>
      <keg-display *ngFor="#keg of kegs"><li>{{ keg.name }},{{ keg.brand }}, {{ keg.price}}, {{ keg.alcohol}}</li></keg-display>
    </div>
  `
})
export class AppComponent {
  public kegs: Keg[];
  constructor(){
    this.kegs = [
      new Keg("Drop Top", "Widmer", 7, "5%", 0),
      new Keg("Hub IPA", "HUB", 9, "15%", 1)
    ];
  }
  kegWasSelected(clickedKeg: Keg): void {
    console.log(clickedKeg);
  }
}

// this gets its own file only for the parent in file called something.model.ts

// export class Keg {
//   public empty: boolean = false;
//   constructor(public name: string, public brand: string, public price: number, public alcohol: string, public id: number) {
//
//   }
// }
