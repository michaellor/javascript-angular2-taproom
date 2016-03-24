import { Component, EventEmitter } from 'angular2/core';
import { Keg } from './keg.model';

@Pipe ({
  name: "alcohol",
  pure: false
})

export class AlcoholPipe implements PipeTransform {
  transform(input: Keg[], args) {
    var desiredAlcoholLevel = args[0];
    if (desiredAlcoholLevel > 10) {}
  }
}
