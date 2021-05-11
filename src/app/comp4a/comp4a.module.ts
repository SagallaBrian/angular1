import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Comp4aComponent } from './comp4a.component';
import { AppRoutingModule } from '../app-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule, 
    AppRoutingModule
  ],
  declarations: [Comp4aComponent],
  exports: [Comp4aComponent]
})
export class Comp4aModule { }
