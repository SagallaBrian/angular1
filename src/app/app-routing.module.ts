import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { Comp3Component } from './comp3/comp3.component';
import { Comp4Component } from './comp4/comp4.component';
import { Comp4aComponent } from './comp4a/comp4a.component';
import { Comp4bComponent } from './comp4b/comp4b.component';
import { Comp5Component } from './comp5/comp5.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'tut1', component: Comp1Component},
  {path:'tut2', component: Comp2Component},
  {path:'tut3', component: Comp3Component},
  {path:'tut4', component: Comp4Component},
  {path:'tut4a', component: Comp4aComponent},
  {path:'tut4b', component: Comp4bComponent},
  {path:'tut5', component: Comp5Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), FormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
