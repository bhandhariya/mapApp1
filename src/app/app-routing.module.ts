import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MarkPolygonComponent } from './mark-polygon/mark-polygon.component';
import { CheckLocationComponent } from './check-location/check-location.component';
import { KmlsearchComponent } from './kmlsearch/kmlsearch.component';


const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"home",component:HomeComponent},
  {path:"mark",component:MarkPolygonComponent},
  {path:"check",component:CheckLocationComponent},
  {path:"kml",component:KmlsearchComponent},
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
