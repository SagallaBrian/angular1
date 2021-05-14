import { Component, OnInit } from '@angular/core';
import { ApicallsService } from "../apicalls.service";
import { myDataInterface } from "../datainterface";

@Component({
  selector: 'app-comp8',
  templateUrl: './comp8.component.html',
  styleUrls: ['./comp8.component.css'],
  providers:[ApicallsService]
})
export class Comp8Component implements OnInit {

  mydataarray:myDataInterface[] =[];

  constructor(private datareceived: ApicallsService) { }

  ngOnInit(): void {
    this.datareceived.getdatafromurl()
    .subscribe((mydata)=>{
      return this.mydataarray = mydata
    })
  }

}
