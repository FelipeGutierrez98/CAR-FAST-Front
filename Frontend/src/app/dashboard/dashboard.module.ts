import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarsComponent } from './components/cars/cars.component';



@NgModule({
  declarations: [
    CarsComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CarsComponent
  ]
})
export class DashboardModule { }
