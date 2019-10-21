import { Component, OnInit } from '@angular/core';
declare var google: any;
import * as inside from "point-in-polygon";
import Swal from 'sweetalert2'
import { CordinatesService } from "../cordinates.service";
@Component({
  selector: 'app-check-location',
  templateUrl: './check-location.component.html',
  styleUrls: ['./check-location.component.css']
})
export class CheckLocationComponent implements OnInit {

  constructor(private cord:CordinatesService) { }

  ngOnInit() {
  }
  lat;lng;
  address;
  getCordsFromAddress(){
    var geocoder = new google.maps.Geocoder();
    // var address = "house no 256 , maliyon ki choupal, surajpol bharatpur";
    geocoder.geocode( { 'address': this.address},(results, status)=> {
      this.lat=(results[0].geometry.location.lat())
      this.lng=(results[0].geometry.location.lng()) 
      Swal.fire({
        title: 'The location is ',
        text: 'Latitute is  '+this.lat+'  and the longtitute is '+this.lng,
        type: 'success',
        confirmButtonText: 'Ok '
      })
      this.cord.getAllCordinated().subscribe(this.cb)
      
      }); 
  }
  cb=(data)=>{
    console.log(data);
    for(var i=0;i<data.length;i++){
      var arr=[]
      var polygon=(data[i].cc);
      for(var j=0;j<polygon.length;j++){
        var arr1=[polygon[j].lat,polygon[j].lng];
        // console.log(arr1)
        arr.push(arr1)
      }
      console.log(arr)
      var check=inside([this.lat,this.lng],arr);
      if(check==true){
        alert(data[i].zone+'  is the zone ')
    }else{
      console.log('zone did not found')
    }
    }
  }
  

}
