import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
   // this.initMap();
  }

  // map;
  // initMap() {
  //       this.map = new google.maps.Map(document.getElementById('map'), {
  //         center: {lat: -34.397, lng: 150.644},
  //         zoom: 8
  //       });
  //     }

}
