import { Component, OnInit } from '@angular/core';
import { xml2json } from "xml-js";


@Component({
  selector: 'app-kmlsearch',
  templateUrl: './kmlsearch.component.html',
  styleUrls: ['./kmlsearch.component.css']
})
export class KmlsearchComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }
  XML;
  fileUpload(event){
    var file = event.target.files[0];
    sessionStorage.setItem('file', JSON.stringify(file))
    console.log(sessionStorage.getItem('file'));
    
  }
  csvContent


  onFileLoad(fileLoadedEvent) {
    const textFromFileLoaded = fileLoadedEvent.target.result;
    this.csvContent = textFromFileLoaded;
    sessionStorage.setItem('csv', JSON.stringify(this.csvContent))
  //  var cml=(sessionStorage.getItem('csv'));
  //  console.log(JSON.parse(sessionStorage.getItem('csv')))
   var day=(JSON.parse(xml2json(JSON.parse(sessionStorage.getItem('csv')))))
    console.log(day);
    this.XML=day;
    console.log(this.XML)
  }

  onFileSelect(input: HTMLInputElement) {
    const files = input.files;
    var content = this.csvContent;
    if (files && files.length) {
      const fileToRead = files[0];
      const fileReader = new FileReader();
      fileReader.onload = this.onFileLoad;

      fileReader.readAsText(fileToRead, "XML");
    }
  }

}
