import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LaptopComponent } from '../product/laptop/laptop.component';
import { ProductComponent } from '../product/product.component';
import { TabletComponent } from '../product/tablet/tablet.component';
import { TvComponent } from '../product/tv/tv.component';
import { WashingmachineComponent } from '../product/washingmachine/washingmachine.component';

import { UtilityModule } from '../utility.module';
import { RouterModule, Routes } from '@angular/router';

const prodcustsRoutes : Routes = [
  // {path: '', component: ProductComponent, children: [       // for lazy module    // singal window
  {path: '', children: [ 
    {path: '', component: ProductComponent},      // for lazy module            //multipal windows
    {path: 'laptop', component: LaptopComponent}, 
    { path: 'tv', component: TvComponent},
    {path: 'tablet', component: TabletComponent},
    {path: 'washingmachine', component: WashingmachineComponent}
  ] },
]


@NgModule({
  declarations: [
    ProductComponent,
    LaptopComponent,
    TvComponent,
    TabletComponent,
    WashingmachineComponent
  ],
  imports: [
    CommonModule,
    // RouterModule,
    RouterModule.forChild(prodcustsRoutes),   // lazy module
    UtilityModule
  ]
})
export class ProductsModule {

  /**
   *
   */
   constructor() {
    console.log('ProductsModule called');
    
  }
 }
