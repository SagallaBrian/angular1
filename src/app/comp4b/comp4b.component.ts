import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { LessonsService } from "../lessons.service";


@Component({
    selector: 'app-comp4b',
    templateUrl: './comp4b.component.html',
    styleUrls: ['./comp4b.component.css'],
    providers: [LessonsService]

})
export class Comp4bComponent implements OnInit {

    myName = new FormControl('');
    receivedarrays: { username: string, usremail: string, usrpass: string }[] = [];
    myformsubmitted: boolean = false;

    myprofileForm: FormGroup = new FormGroup({});


    ngOnInit(): void {

        this.myprofileForm = new FormGroup({
            usrnameimp: new FormControl('', [
                Validators.required,
                Validators.minLength(4),
            ]),
            usremailimp: new FormControl('', [
                Validators.required,
                Validators.minLength(4),
                Validators.email
            ]),
            usrpassimp: new FormControl('', [
                Validators.required,
                Validators.minLength(4),
            ]),
        });
    }

    submit_fu2() {
        console.log(this.myprofileForm.value);
        interface FormInterface {
            usrnameimp: number,
            usremailimp: string,
            usrpassimp: string
        }
        let mydata: FormInterface = this.myprofileForm.value;
        this.myadduser.addinfo(mydata);
        this.myprofileForm.reset();
        this.myformsubmitted = true;
    }

    constructor(private myadduser: LessonsService) {
        this.receivedarrays = myadduser.getuserinfo();
    }


}
