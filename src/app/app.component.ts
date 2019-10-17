import { Component,AfterViewInit } from '@angular/core';
import { MapLoaderService } from './map-loader.service'
declare var google: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements AfterViewInit  {
  map: any;
  drawingManager: any;

  constructor() {

  }

  ngAfterViewInit() {
    MapLoaderService.load().then(() => {
      this.drawPolygon();
      this.initmapp();
    })
  }

  drawPolygon() {
    this.map = new google.maps.Map(document.getElementById('map'), {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 8
    });

    this.drawingManager = new google.maps.drawing.DrawingManager({
      drawingMode: google.maps.drawing.OverlayType.POLYGON,
      drawingControl: true,
      drawingControlOptions: {
        position: google.maps.ControlPosition.TOP_CENTER,
        drawingModes: ['polygon']
      }
    });

    this.drawingManager.setMap(this.map);
    google.maps.event.addListener(this.drawingManager, 'overlaycomplete', (event) => {
      // Polygon drawn
      if (event.type === google.maps.drawing.OverlayType.POLYGON) {
        //this is the coordinate, you can assign it to a variable or pass into another function.
        var rr=(JSON.stringify(event.overlay.getPath().getArray()));
        console.log(JSON.parse(rr));
        localStorage.setItem(rr,'cord')
      }
      
    });
  }
  initmapp(){
    // var map = new google.maps.Map(document.getElementById('map'), {
    //   zoom: 1,
    //   center: {lat: 24.886, lng: -70.268},
    //   mapTypeId: 'terrain'
    // });
    var blueCoords = [
      {lat: 25.774, lng: -60.190},
      {lat: 18.466, lng: -46.118},
      {lat: 32.321, lng: -44.757}
    ];

    var redCoords = [
      {lat: 25.774, lng: -80.190},
      {lat: 18.466, lng: -66.118},
      {lat: 32.321, lng: -64.757}
    ];

    new google.maps.Polygon({
      map: this.map,
      paths: redCoords,
      strokeColor: '#FF0000',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: '#FF0000',
      fillOpacity: 0.35,
      draggable: true,
      geodesic: true
    });
    new google.maps.Polygon({
      map: this.map,
      paths: blueCoords,
      strokeColor: '#0000FF',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: '#0000FF',
      fillOpacity: 0.35,
      draggable: true,
      geodesic: false
    });


  }
}
