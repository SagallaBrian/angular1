import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Comp4bComponent } from './comp4b.component';
import { AppRoutingModule } from '../app-routing.module';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule, 
    AppRoutingModule
  ],
  declarations: [Comp4bComponent],
  exports: [Comp4bComponent]
})
export class Comp4bModule { }
