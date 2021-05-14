import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { FormsModule } from "@angular/forms";  
// The formModule would be imported directly in the comp4a component 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// http modules 
import { HttpClientModule } from '@angular/common/http';


import { HomeComponent } from './home/home.component';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { Comp3Component } from './comp3/comp3.component';
import { NavbarComponent } from './navbar/navbar.component';
import { Comp4Component } from './comp4/comp4.component';
// import { Comp4aComponent } from './comp4a/comp4a.component';
// import { Comp4bComponent } from './comp4b/comp4b.component';


import { Comp4aModule } from './comp4a/comp4a.module';
import { Comp4bModule } from './comp4b/comp4b.module';
import { Comp5Component } from './comp5/comp5.component';
import { Comp6Component } from './comp6/comp6.component';
import { Comp7Component } from './comp7/comp7.component';
import { Comp7aComponent } from './comp7a/comp7a.component';
import { Comp7bModule } from './comp7b/comp7b.module';
import { Comp8Component } from './comp8/comp8.component';
// import { Comp7bComponent } from './comp7b/comp7b.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Comp1Component,
    Comp2Component,
    Comp3Component,
    NavbarComponent,
    Comp4Component,
    Comp5Component,
    Comp6Component,
    Comp7Component,
    Comp7aComponent,
    Comp8Component,
    // Comp7bComponent,
    // Comp4aComponent,
    // Comp4bComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Comp4aModule,
    Comp4bModule,
    Comp7bModule,
    HttpClientModule
    // FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
