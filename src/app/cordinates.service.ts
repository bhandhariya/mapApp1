import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CordinatesService {

  constructor(private http:HttpClient) { }

  create(obj){
    console.log(obj);
    this.http.post('/api/create',obj).subscribe(this.cb)
  }
  cb=(dt)=>{
    console.log(dt)
  }
  getAllCordinated(){
     return this.http.get('/api/all')
  }
}
