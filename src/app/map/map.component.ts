import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  lat = 18.549756814137133;
  lng = 73.76350918524167;
  public origin: any;
  public destination: any;
  isChosen = false;
  constructor() { }

  ngOnInit() {
    this.getDirection();
  }
   
  getDirection() {
    this.origin = { lat: 18.551388, lng: 73.768540 };
    this.destination = { lat: 18.566587, lng: 73.770087 };
   
    // this.origin = 'Taipei Main Station';
    // this.destination = 'Taiwan Presidential Office';
  }

  onChosenLocation(event) {
    console.log(event);
    this.lat = event.coords.lat;
    this.lng = event.coords.lng;
    this.isChosen = true;
  }

}
