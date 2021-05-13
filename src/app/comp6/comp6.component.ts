import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-comp6',
    templateUrl: './comp6.component.html',
    styleUrls: ['./comp6.component.css']
})
export class Comp6Component implements OnInit {

    spanclas1: boolean = true;
    toglclas1: boolean = false;

    togltexclas: boolean = true;
    toglbgclass: boolean = true;
    toglpadclss: boolean = true;
    toglmagclss: boolean = true;

    toglweights: boolean = true;
    toglitalics: boolean = true;
    toglsizesty: boolean = true;

    myintialclasses={};
    myintialstyles={};

   setclass(){
    this.myintialclasses = {
        "text-white": this.togltexclas,
        "bg-success": this.toglbgclass,
        "p-2": this.toglpadclss,
        "my-3": this.toglmagclss,
    };
   }

   setstyles() {
    // CSS styles: set per current state of component properties
    this.myintialstyles = {
      'font-style':  this.toglitalics  ? 'italic' : 'normal',
      'font-weight': this.toglweights  ? 'bold'   : 'normal',
      'font-size':   this.toglsizesty  ? '20px'   : '15px'
    };
  }

    togclmethod() {
        this.toglclas1 = !this.toglclas1;
    }
    togltxtclassmethod() {
        this.togltexclas = !this.togltexclas;
        this.setclass(); 
    }
    toglbgclassmethod() {
        this.toglbgclass = !this.toglbgclass;
        this.setclass(); 
    }
    toglpadclassmethod() {
        this.toglpadclss = !this.toglpadclss;
        this.setclass(); 
    }
    toglmagclassmethod() {
        this.toglmagclss = !this.toglmagclss;
        this.setclass(); 
    }


    
    togitalistylmethod(){
        this.toglitalics = !this.toglitalics;
        this.setstyles(); 
    }
    togweigtstylmethod(){
        this.toglweights = !this.toglweights;
        this.setstyles(); 
    }
    togsizestylmethod(){
        this.toglsizesty = !this.toglsizesty;
        this.setstyles(); 
    }



    constructor() { }

    ngOnInit(): void {
     this.setclass();
     this.setstyles();
    }

}
