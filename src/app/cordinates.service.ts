import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from "@angular/material/dialog";
import { Dialog1Component } from "./dialog1/dialog1.component";

@Injectable({
  providedIn: 'root'
})
export class CordinatesService {

  constructor(private http:HttpClient,private dialog:MatDialog) { }

  create(obj){
    console.log(obj);
    let ref=this.dialog.open(Dialog1Component,{
      height:"400px",
      width: '600px'
    })
    ref.afterClosed().subscribe(result=>{
      console.log(result.name);
      // obj['zonename']=result.name;
      // console.log(obj.zonename)
      var obj2={
        zonename:result.name
      }
      this.http.post('/api/create',{first:obj,second:obj2}).subscribe(this.cb);
    })
    
  }
  cb=(dt)=>{
    console.log(dt)
  }
  getAllCordinated(){
     return this.http.get('/api/all')
  }
}
