import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-comp7a',
  templateUrl: './comp7a.component.html',
  styleUrls: ['./comp7a.component.css']
})
export class Comp7aComponent implements OnInit {
  // Declare the input decorator: @Input
  @Input() mystatic: string | undefined;
  @Input() mydynamic: string | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
