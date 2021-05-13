import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Comp7bComponent } from './comp7b.component';
import { AppRoutingModule } from '../app-routing.module';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule, 
    AppRoutingModule
  ],
  declarations: [Comp7bComponent],
  exports: [Comp7bComponent]
})
export class Comp7bModule { }
