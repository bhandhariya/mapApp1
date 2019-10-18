import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import { TestComponent } from './test/test.component';
import { Dialog1Component } from './dialog1/dialog1.component';
import { HomeComponent } from './home/home.component';
import { MarkPolygonComponent } from './mark-polygon/mark-polygon.component';
import { CheckLocationComponent } from './check-location/check-location.component'; 
import { AgmCoreModule } from "@agm/core";

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    Dialog1Component,
    HomeComponent,
    MarkPolygonComponent,
    CheckLocationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,FormsModule, BrowserAnimationsModule,
    MatDialogModule,
    AgmCoreModule.forRoot({
      apiKey:"AIzaSyAw7YBvg7qwPOz626dK7tQzViW6CdfwlM0"
    })
  ],
  entryComponents:[Dialog1Component],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
