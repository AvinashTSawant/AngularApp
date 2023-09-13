import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { Demo2Component } from './demo2/demo2.component';
import { DemoComponent } from './demo/demo.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChildComponent } from './child/child.component';
import { Assi1Component } from './assi1/assi1.component';
import { Assi1InputdecoratorComponent } from './assi1-inputdecorator/assi1-inputdecorator.component';
import { NgifComponent } from './ngif/ngif.component';
import { NgforComponent } from './ngfor/ngfor.component';
import { NgswitchComponent } from './ngswitch/ngswitch.component';
import { Assi3ngifngforngswitchComponent } from './assi3ngifngforngswitch/assi3ngifngforngswitch.component';
import { AttributedirComponent } from './attributedir/attributedir.component';
// import { CustdirDirective } from './custdir.directive'; 
import { Assi4directivesCountryStateComponent } from './assi4directives-country-state/assi4directives-country-state.component';
import { SimpleformComponent } from './simpleform/simpleform.component';
import { Assi5templateDericenformComponent } from './assi5template-dericenform/assi5template-dericenform.component';
import { Assi6fromvalidationComponent } from './assi6fromvalidation/assi6fromvalidation.component';
import { Assi7EmailvalidationResetComponent } from './assi7-emailvalidation-reset/assi7-emailvalidation-reset.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { Assi8TempformPassconfiComponent } from './assi8-tempform-passconfi/assi8-tempform-passconfi.component';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { Age1Component } from './age1/age1.component';
import { Age2Component } from './age2/age2.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Assi9RectiveFormComponent } from './assi9-rective-form/assi9-rective-form.component';
import { Comp3Component } from './comp3/comp3.component';
import { Comp4Component } from './comp4/comp4.component';
import { Comp5Component } from './comp5/comp5.component';
import { Comp6Component } from './comp6/comp6.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
// import { ProductComponent } from './product/product.component';
// import { LaptopComponent } from './product/laptop/laptop.component';ng s
// import { TvComponent } from './product/tv/tv.component';
// import { TabletComponent } from './product/tablet/tablet.component';
// import { WashingmachineComponent } from './product/washingmachine/washingmachine.component';
import { PostComponent } from './post/post.component';
import { PostdetailsComponent } from './postdetails/postdetails.component';
// import { ProductsModule } from './products/products.module';
import { UtilityModule } from './utility.module';
// import { ElectronicModule } from './electronic/electronic.module';
import { LogoutComponent } from './logout/logout.component';
import { HookComponent } from './hook/hook.component';
import { PipedemoComponent } from './pipedemo/pipedemo.component';
import { CountPipe } from './count.pipe';
import { FilterPipe } from './filter.pipe';

import { FilterpipeComponent } from './filterpipe/filterpipe.component';
import { TodoComponent } from './todo/todo.component';
import { RapidapiComponent } from './rapidapi/rapidapi.component';
import { FirebaseComponent } from './firebase/firebase.component';
import { RandomuserComponent } from './randomuser/randomuser.component';
import { WikipediaComponent } from './wikipedia/wikipedia.component';
import { HeadersInterceptorService } from './headers-interceptor.service';
import { GiphyComponent } from './giphy/giphy.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { RxjsComponent } from './rxjs/rxjs.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskFormComponent } from './task-form/task-form.component';




// import { ElectronicsComponent } from './electronics/electronics.component';
// import { MobilesComponent } from './electronics/mobiles/mobiles.component';
// import { SmartwatchesComponent } from './electronics/smartwatches/smartwatches.component';
// import { HealthcareComponent } from './electronics/healthcare/healthcare.component';
// import { CameraComponent } from './electronics/camera/camera.component';






@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    Demo2Component,
    DatabindingComponent,
    ChildComponent,
    Assi1Component,
    Assi1InputdecoratorComponent,
    NgifComponent,
    NgforComponent,
    NgswitchComponent,
    Assi3ngifngforngswitchComponent,
    AttributedirComponent,
    // CustdirDirective,             // used in feature shred modue so it remove and ussed in utility module
    Assi4directivesCountryStateComponent,
    SimpleformComponent,
    Assi5templateDericenformComponent,
    Assi6fromvalidationComponent,
    Assi7EmailvalidationResetComponent,
    ReactiveFormsComponent,
    Assi8TempformPassconfiComponent,
    Comp1Component,
    Comp2Component,
    Age1Component,
    Age2Component,
    Assi9RectiveFormComponent,
    Comp3Component,
    Comp4Component,
    Comp5Component,
    Comp6Component,
    LoginComponent,
    HomeComponent,
    AboutusComponent,
    ContactusComponent,
    PagenotfoundComponent,
    // ProductComponent,
    // LaptopComponent,
    // TvComponent,                       // all module used in porduct module in all in one module
    // TabletComponent,
    // WashingmachineComponent,
    PostComponent,
    PostdetailsComponent,
    LogoutComponent,
    HookComponent,
    PipedemoComponent,
    CountPipe,
    FilterPipe,
  
    FilterpipeComponent,
  
    TodoComponent,
  
    RapidapiComponent,
  
    FirebaseComponent,
  
    RandomuserComponent,
  
    WikipediaComponent,
  
    GiphyComponent,
  
    RxjsComponent,
  
    TaskListComponent,
  
    TaskFormComponent,
  
 
  
   
  
   

    // ElectronicsComponent,
    // MobilesComponent,
    // SmartwatchesComponent,
    // HealthcareComponent,
    // CameraComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   FormsModule,
   ReactiveFormsModule,
   HttpClientModule,
  //  ProductsModule,   // used for lazy lodind
  // ElectronicModule,
   UtilityModule,
   NgxPaginationModule
  ],

  // providers: [
    
  // ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HeadersInterceptorService,
      multi: true
      }
  ],

  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    console.log('App Module called');
    
  }
 }
