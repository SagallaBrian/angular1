import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp7',
  templateUrl: './comp7.component.html',
  styleUrls: ['./comp7.component.css']
})
export class Comp7Component implements OnInit {

  passdata: string = "Passing data two";
  arraydata: string[] = ["Array item 1",
    "Array item 2",
  ];

  addItem(newItem: string) {
    this.arraydata.push(newItem);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
