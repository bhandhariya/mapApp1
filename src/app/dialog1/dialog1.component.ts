import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
@Component({
  selector: 'app-dialog1',
  templateUrl: './dialog1.component.html',
  styleUrls: ['./dialog1.component.css']
})
export class Dialog1Component implements OnInit {

  constructor(private dialogRef: MatDialogRef<Dialog1Component>,
    @Inject(MAT_DIALOG_DATA) data) { }

  ngOnInit() {
  }
  zone;
  save() {
    var obj={
      name:this.zone
    }
    this.dialogRef.close(obj);
}

close() {
    this.dialogRef.close();
}

}
