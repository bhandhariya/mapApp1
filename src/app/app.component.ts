import { Component,AfterViewInit } from '@angular/core';
import { MapLoaderService } from './map-loader.service'
import { HttpClient } from '@angular/common/http';
import { CordinatesService } from "./cordinates.service";
declare var google: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent   {
  

}
