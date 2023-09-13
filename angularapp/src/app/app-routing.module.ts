import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AuthgaurdGuard } from './AuthGuard/authgaurd.guard';
import { ContactusComponent } from './contactus/contactus.component';
import { FirebaseComponent } from './firebase/firebase.component';
import { GiphyComponent } from './giphy/giphy.component';

// import { CameraComponent } from './electronics/camera/camera.component';
// import { ElectronicsComponent } from './electronics/electronics.component';
// import { HealthcareComponent } from './electronics/healthcare/healthcare.component';
// import { MobilesComponent } from './electronics/mobiles/mobiles.component';
// import { SmartwatchesComponent } from './electronics/smartwatches/smartwatches.component';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PostComponent } from './post/post.component';
import { PostdetailsComponent } from './postdetails/postdetails.component';
import { RandomuserComponent } from './randomuser/randomuser.component';
import { RapidapiComponent } from './rapidapi/rapidapi.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { TaskFormComponent } from './task-form/task-form.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TodoComponent } from './todo/todo.component';
import { WikipediaComponent } from './wikipedia/wikipedia.component';

// import { LaptopComponent } from './product/laptop/laptop.component';
// import { ProductComponent } from './product/product.component';
// import { TabletComponent } from './product/tablet/tablet.component';
// import { TvComponent } from './product/tv/tv.component';
// import { WashingmachineComponent } from './product/washingmachine/washingmachine.component';


const routes: Routes = [
  // {path: '', redirectTo: 'home', pathMatch: 'full'},
  // {path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent}, // localhost:4200/login
  { path: 'logout', component: LogoutComponent},
  {path: 'home', component: HomeComponent},
  {path: 'aboutus', component: AboutusComponent},
  {path: 'contactus', component: ContactusComponent}, 

  // { path: 'product', loadChildren: './products/products.module#ProductsModule'},
  { path: 'product',canActivate:[AuthgaurdGuard], loadChildren: './products/products.module#ProductsModule'},

  { path: 'electronics', loadChildren: './electronic/electronic.module#ElectronicModule'},

  // // {path: 'product', children: [                                //  singal router outlet
  //   {path: 'product',component: ProductComponent, children: [     // multipal router outlet
  //   // { path: '', component: ProductComponent}, // localhost:4200/product/laptop   
  //   {path: 'laptop', component: LaptopComponent},
  //   { path: 'tv', component: TvComponent},
  //   {path: 'tablet', component: TabletComponent},
  //   {path: 'washingmachine', component: WashingmachineComponent}            /// remove for lazy lodaing
  // ] },



  //   {path: 'electronics', children: [                                //  singal router outlet
  //   // {path: 'electronics',component: ElectronicsComponent, children: [     // multipal router outlet
  //   { path: '', component: ElectronicsComponent}, // localhost:4200/product/laptop   
  //   {path: 'camera', component: CameraComponent},
  //   { path: 'healthcare', component: HealthcareComponent},
  //   {path: 'mobiles', component: MobilesComponent},
  //   {path: 'smartwatches', component: SmartwatchesComponent}          
  // ] },


    {path: 'post', component: PostComponent},
  {path: 'postdetails/:id', component: PostdetailsComponent},
  {path: 'todo', component: TodoComponent},
  {path: 'rapidapi', component: RapidapiComponent},
  {path: 'firebase', component: FirebaseComponent},
  {path: 'randomuser', component: RandomuserComponent},
  {path: 'wikipedia', component: WikipediaComponent},
  {path: 'giphy', component: GiphyComponent},
  {path: 'rxjs', component: RxjsComponent},
  {path: 'task-list', component: TaskListComponent},
  {path: 'task-form', component: TaskFormComponent},
   {path: '**', component: PagenotfoundComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],   // lezy loading  
  // imports: [RouterModule.forRoot(routes ,{ preloadingStrategy: PreloadAllModules})],  // for prelading
  exports: [RouterModule]
})
export class AppRoutingModule { }
