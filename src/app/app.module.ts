import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { FormsModule } from "@angular/forms";  
// The formModule would be imported directly in the comp4a component 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


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
    // Comp4aComponent,
    // Comp4bComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Comp4aModule,
    Comp4bModule
    // FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
