import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { Comp3Component } from './comp3/comp3.component';
import { NavbarComponent } from './navbar/navbar.component';
import { Comp4Component } from './comp4/comp4.component';
import { Comp4aComponent } from './comp4a/comp4a.component';
import { Comp4bComponent } from './comp4b/comp4b.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Comp1Component,
    Comp2Component,
    Comp3Component,
    NavbarComponent,
    Comp4Component,
    Comp4aComponent,
    Comp4bComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
