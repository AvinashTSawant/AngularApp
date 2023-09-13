import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CameraComponent } from '../electronics/camera/camera.component';
import { ElectronicsComponent } from '../electronics/electronics.component';
import { HealthcareComponent } from '../electronics/healthcare/healthcare.component';
import { MobilesComponent } from '../electronics/mobiles/mobiles.component';
import { SmartwatchesComponent } from '../electronics/smartwatches/smartwatches.component';
import { UtilityModule } from '../utility.module';
import { RouterModule, Routes } from '@angular/router';

const electronicsRoutes : Routes = [
  {path: '', component: ElectronicsComponent, children: [       // for lazy module 

  //  {path: 'electronics', children: [                                //  singal router outlet
    // {path: 'electronics',component: ElectronicsComponent, children: [     // multipal router outlet
    // { path: '', component: ElectronicsComponent}, // localhost:4200/product/laptop   
    

    {path: 'camera', component: CameraComponent},
    { path: 'healthcare', component: HealthcareComponent},
    {path: 'mobiles', component: MobilesComponent},
    {path: 'smartwatches', component: SmartwatchesComponent}          
  ] },

]

@NgModule({
  declarations: [
    ElectronicsComponent,
    MobilesComponent,
    SmartwatchesComponent,
    HealthcareComponent,
    CameraComponent,
  ],
  imports: [
    CommonModule,
    // RouterModule,
    RouterModule.forChild(electronicsRoutes),   // lazy module
    UtilityModule

  ]
})
export class ElectronicModule {
  constructor() {
    console.log('Electronic module called');
    
  }
 }
