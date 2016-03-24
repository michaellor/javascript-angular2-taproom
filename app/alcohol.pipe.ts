import { Pipe, PipeTransform } from 'angular2/core';
import { Keg } from './keg.model';

@Pipe ({
  name: "alcohol",
  pure: false
})

export class AlcoholPipe implements PipeTransform {
  transform(input: Keg[], args) {
    var desiredAlcoholLevel = args[0];
    if (desiredAlcoholLevel  === "strong") {
        return input.filter((keg) => {
        if (keg.alcohol > 10) {
          return true;
        }
      });
    } else if (desiredAlcoholLevel === "notStrong") {
        return input.filter((keg) => {
          if(keg.alcohol < 10) {
            return true;
          }
        });
      } else {
        return input;
      }
    }
  }
