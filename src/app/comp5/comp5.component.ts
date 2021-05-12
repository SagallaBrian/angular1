import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp5',
  templateUrl: './comp5.component.html',
  styleUrls: ['./comp5.component.css']
})
export class Comp5Component implements OnInit {
  spanclas1:boolean = true ;
  colorvar:string = "#0d6efd";

  spanclas2:string = "text-white bg-danger p-2 mb-2" ;
  colorvar2:string = "background-color: #0d6efd; color: white; padding: 8px;";
  constructor() { }

  ngOnInit(): void {
  }

}
