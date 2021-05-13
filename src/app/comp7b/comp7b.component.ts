import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";


@Component({
  selector: 'app-comp7b',
  templateUrl: './comp7b.component.html',
  styleUrls: ['./comp7b.component.css']
})
export class Comp7bComponent implements OnInit {
  myprofileForm: FormGroup = new FormGroup({});

  constructor() { }

  @Output() newItemEvent = new EventEmitter<string>();
  
  ngOnInit(): void {

    this.myprofileForm = new FormGroup({
        myName: new FormControl('', [
            Validators.minLength(4),
        ]),
    });
}

submit_fu2() {
    console.log(this.myprofileForm.value.myName);
    this.newItemEvent.emit(this.myprofileForm.value.myName);
    this.myprofileForm.reset();

}

}
