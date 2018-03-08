import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';


@Component({
  selector: 'page-segments',
  templateUrl: 'segments.html'
})
export class SegmentsPage {
  pet: string = "puppies";
  isAndroid: boolean = false;

  constructor(platform: Platform) {
    this.isAndroid = platform.is('android');
  }
}
