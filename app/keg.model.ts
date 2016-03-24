export class Keg {
  // create a public class of number for pours
  public pours: number = 124;
  // if that is created create a file that is for pour
  public empty: boolean = false;
  constructor(public name: string,
              public brand: string,
              public price: number,
              public alcohol: string,
              public id: number) {
  }
}
