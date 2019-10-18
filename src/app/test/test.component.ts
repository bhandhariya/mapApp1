import { Component, OnInit,TemplateRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Dialog1Component } from "../dialog1/dialog1.component";
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
 
  }

  opendialLog(){
    this.dialog.open(Dialog1Component)
  }

}
